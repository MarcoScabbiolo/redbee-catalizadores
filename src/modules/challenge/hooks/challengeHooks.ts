import { useContext, useMemo } from 'react'
import { useObservableSubscription } from '../../shared'
import { useCurrentUser } from '../../user'
import { ChallengeRepositoryContext } from '../context'
import { Challenge } from '../domain'
import { ChallengeRepository } from '../services'

export const useChallengeRepository = (): ChallengeRepository => {
  const repository = useContext(ChallengeRepositoryContext)

  if (!repository) {
    throw new Error('No ChallengeRepositoryContext')
  }

  return repository
}

export const useAllChallenges = (): Challenge[] => {
  const repository = useChallengeRepository()

  return useObservableSubscription(repository.challenges) ?? []
}

export const useMyChallenges = (): Challenge[] => {
  const repository = useChallengeRepository()
  const me = useCurrentUser()

  const observable = useMemo(
    () => repository.getByUserId(me.id),
    [me.id, repository],
  )

  return useObservableSubscription(observable) ?? []
}
