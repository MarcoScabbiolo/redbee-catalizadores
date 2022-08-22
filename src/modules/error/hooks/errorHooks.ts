import { useContext } from 'react'
import { ErrorContext } from '../context'
import { ErrorService } from '../services'

export const useErrorService = (): ErrorService => {
  const service = useContext(ErrorContext)

  if (!service) {
    throw new Error('No ErrorContext')
  }

  return service
}
