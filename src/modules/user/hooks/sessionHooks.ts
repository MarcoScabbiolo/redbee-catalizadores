import { useContext } from 'react'
import { useObservableSubscription } from '../../shared'
import { SessionContext } from '../context'
import { User } from '../domain'
import { SessionService } from '../services'

export const useSessionService = (): SessionService => {
  const service = useContext(SessionContext)

  if (!service) {
    throw new Error('No SessionContext')
  }

  return service
}

export const useCurrentUser = (): User => {
  const service = useSessionService()

  const user = useObservableSubscription(service.user)

  if (!user) {
    throw new Error('No user')
  }

  return user
}
