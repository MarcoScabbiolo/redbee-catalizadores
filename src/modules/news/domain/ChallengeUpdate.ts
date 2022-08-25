import { Challenge } from '../../challenge'
import { User } from '../../user/domain'

export const enum ChallengeUpdateType {
  Creation = 'Created',
  Vote = 'Voted',
  Announcement = 'Announced',
  SolutionProposal = 'Proposed a solution',
}

export interface ChallengeUpdate {
  challengeId: string
  challengeName: string
  description: string
  by: User
  type: ChallengeUpdateType
}

export const createBaseChallengeUpdate = (
  challenge: Challenge,
  user: User,
): Omit<ChallengeUpdate, 'description' | 'type'> => ({
  challengeId: challenge.id,
  challengeName: challenge.name,
  by: user,
})

export const createChallengeCreationUpdate = (
  challenge: Challenge,
  user: User,
): ChallengeUpdate => ({
  ...createBaseChallengeUpdate(challenge, user),
  type: ChallengeUpdateType.Creation,
  description: ChallengeUpdateType.Creation,
})

export const createChallengeVote = (
  challenge: Challenge,
  user: User,
): ChallengeUpdate => ({
  ...createBaseChallengeUpdate(challenge, user),
  description: ChallengeUpdateType.Vote,
  type: ChallengeUpdateType.Vote,
})

export const createChallengeAnnouncement = (
  challenge: Challenge,
  user: User,
): ChallengeUpdate => ({
  ...createBaseChallengeUpdate(challenge, user),
  description: ChallengeUpdateType.Announcement,
  type: ChallengeUpdateType.Announcement,
})

export const createChallengeSolutionProposal = (
  challenge: Challenge,
  user: User,
): ChallengeUpdate => ({
  ...createBaseChallengeUpdate(challenge, user),
  description: ChallengeUpdateType.SolutionProposal,
  type: ChallengeUpdateType.SolutionProposal,
})
