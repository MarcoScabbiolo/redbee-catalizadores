import { useContext, useMemo } from 'react'
import { EMPTY, startWith } from 'rxjs'
import { useObservableSubscription } from '../../shared'
import { NewsContext } from '../context'
import { ChallengeUpdate } from '../domain'
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
