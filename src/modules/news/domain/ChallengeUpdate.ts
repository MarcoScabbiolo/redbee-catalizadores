import { User } from '../../user/domain'

export interface ChallengeUpdate {
  challengeId: string
  challengeName: string
  description: string
  by: User
}
