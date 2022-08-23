import { createContext } from 'react'
import { SessionService } from '../services'

export const SessionContext = createContext<SessionService | undefined>(
  undefined,
)
