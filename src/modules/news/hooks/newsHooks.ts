import { useCallback, useContext, useMemo } from 'react'
import { EMPTY, map } from 'rxjs'
import { Challenge, useMyChallenges } from '../../challenge'
import { useObservableSubscription } from '../../shared'
import { useCurrentUser, User } from '../../user'
import { NewsContext } from '../context'
import {
  ChallengeInvestmentUpdate,
  ChallengeMatchUpdate,
  ChallengeUpdate,
  ChallengeUpdateType,
} from '../domain'
import { NewsRepository } from '../services'

export const useNewsRepository = (): NewsRepository => {
  const repository = useContext(NewsContext)

  if (!repository) {
    throw new Error('No NewsContext')
  }

  return repository
}

export const useNewsByUserId = (userId: string): ChallengeUpdate[] => {
  const repository = useNewsRepository()

  const observable = useMemo(
    () => repository.newsByUserId(userId),
    [repository, userId],
  )

  return useObservableSubscription(observable) ?? []
}

export const useNewsByChallengeId = (
  challengeId: string | undefined,
): ChallengeUpdate[] => {
  const repository = useNewsRepository()

  const observable = useMemo(
    () => (challengeId ? repository.newsByChallengeId(challengeId) : EMPTY),
    [challengeId, repository],
  )

  return useObservableSubscription(observable) ?? []
}

export const useMyChallengesNews = (): ChallengeUpdate[] => {
  const repository = useNewsRepository()
  const myChallenges = useMyChallenges()

  const observable = useMemo(
    () => repository.newsByChallengeIds(myChallenges.map(c => c.id)),
    [myChallenges, repository],
  )

  return useObservableSubscription(observable) ?? []
}

export const useChallengeVotes = (challengeId: string): number => {
  const repository = useNewsRepository()
  const observable = useMemo(
    () => repository.votesByChallengeId(challengeId).pipe(map(v => v.length)),
    [challengeId, repository],
  )

  return useObservableSubscription(observable) ?? 0
}

export const useMyVoteInChallenge = (
  challenge: Challenge,
): [boolean, () => void] => {
  const repository = useNewsRepository()
  const me = useCurrentUser()

  const vote = useCallback(() => {
    repository.toggleVoteForChallenge(challenge, me)
  }, [challenge, me, repository])

  const observable = useMemo(
    () =>
      repository
        .votesByChallengeId(challenge.id)
        .pipe(map(vs => vs.some(v => v.by.id === me.id))),
    [challenge.id, me.id, repository],
  )

  const voted = useObservableSubscription(observable) ?? false

  return useMemo(() => [voted, vote], [vote, voted])
}

export const useSolutionProposalCountByChallengeId = (
  challengeId: string,
): number => {
  const repository = useNewsRepository()

  const observable = useMemo(
    () =>
      repository.news.pipe(
        map(
          ns =>
            ns.filter(
              n =>
                n.challengeId === challengeId &&
                n.type === ChallengeUpdateType.SolutionProposal,
            ).length,
        ),
      ),
    [challengeId, repository.news],
  )

  return useObservableSubscription(observable) ?? 0
}

export const useChallengeMatch = (challengeId: string): User | undefined => {
  const repository = useNewsRepository()

  const observable = useMemo(
    () =>
      repository.news.pipe(
        map(
          ns =>
            (
              ns.find(
                n =>
                  n.challengeId === challengeId &&
                  n.type === ChallengeUpdateType.Match,
              ) as ChallengeMatchUpdate
            )?.match,
        ),
      ),
    [challengeId, repository.news],
  )

  return useObservableSubscription(observable)
}

export const useChallengeInvestment = (
  challengeId: string,
): number | undefined => {
  const repository = useNewsRepository()

  const observable = useMemo(
    () =>
      repository.news.pipe(
        map(ns =>
          ns
            .filter(
              n =>
                n.challengeId === challengeId &&
                n.type === ChallengeUpdateType.Investment,
            )
            .map(n => n as ChallengeInvestmentUpdate)
            .reduce((total, n) => total + n.investment, 0),
        ),
        map(i => i || undefined),
      ),
    [challengeId, repository.news],
  )

  return useObservableSubscription(observable)
}

export const useChallengeNetWorth = (
  challengeId: string,
): number | undefined => {
  const repository = useNewsRepository()

  const observable = useMemo(
    () =>
      repository.news.pipe(
        map(ns =>
          ns.find(
            n =>
              n.challengeId === challengeId &&
              n.type === ChallengeUpdateType.End,
          ),
        ),
        map(n => n as ChallengeInvestmentUpdate),
        map(n => n?.investment),
      ),
    [challengeId, repository.news],
  )

  return useObservableSubscription(observable)
}
