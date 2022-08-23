import { ChallengeStatus } from './ChallengeStatus'

export interface Challenge {
  status: ChallengeStatus
  name: string
  description: string
  viewers: string[]
}

export const challengeStatusLabel = (status: ChallengeStatus): string =>
  ChallengeStatus[status]
