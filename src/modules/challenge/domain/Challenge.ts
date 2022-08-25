import { ChallengeStatus } from './ChallengeStatus'

export interface Challenge {
  id: string
  status: ChallengeStatus
  name: string
  description: string
  owners: string[]
}

export const challengeStatusLabel = (status: ChallengeStatus): string =>
  ChallengeStatus[status]
