import { createContext } from 'react'
import { ChallengeRepository } from '../services/ChallengeRepository'

export const ChallengeRepositoryContext = createContext<
  ChallengeRepository | undefined
>(undefined)
