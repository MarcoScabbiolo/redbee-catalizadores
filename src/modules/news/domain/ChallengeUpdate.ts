import { Challenge } from '../../challenge'
import { formatCurrency } from '../../shared'
import { User } from '../../user'

export const enum ChallengeUpdateType {
  Creation = 'Created',
  Proposal = 'Proposed',
  Vote = 'Voted',
  Announcement = 'Announced',
  SolutionProposal = 'Proposed a solution',
  Match = 'Assigned the challenge to ',
  Investment = 'Invested ',
  Update = 'Update',
  End = 'Ended',
  Collect = 'Collected ',
}

export interface ChallengeUpdate {
  challengeId: string
  challengeName: string
  description: string
  by: User
  type: ChallengeUpdateType
}

export interface ChallengeMatchUpdate extends ChallengeUpdate {
  match: User
}

export interface ChallengeInvestmentUpdate extends ChallengeUpdate {
  investment: number
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

export const createChallengeProposalUpdate = (
  challenge: Challenge,
  user: User,
): ChallengeUpdate => ({
  ...createBaseChallengeUpdate(challenge, user),
  type: ChallengeUpdateType.Proposal,
  description: ChallengeUpdateType.Proposal,
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

export const createChallengeMatch = (
  challenge: Challenge,
  user: User,
  match: User,
): ChallengeMatchUpdate => ({
  ...createBaseChallengeUpdate(challenge, user),
  match,
  description: ChallengeUpdateType.Match + match.name,
  type: ChallengeUpdateType.Match,
})

export const createChallengeInvestment = (
  challenge: Challenge,
  user: User,
  investment: number,
): ChallengeInvestmentUpdate => ({
  ...createBaseChallengeUpdate(challenge, user),
  investment,
  description:
    ChallengeUpdateType.Investment + `$ ${formatCurrency(investment)}`,
  type: ChallengeUpdateType.Investment,
})

export const createChallengeUpdateFromMatch = (
  challenge: Challenge,
  user: User,
  update: string,
): ChallengeUpdate => ({
  ...createBaseChallengeUpdate(challenge, user),
  description: update,
  type: ChallengeUpdateType.Update,
})

export const createChallengeEnding = (
  challenge: Challenge,
  user: User,
  netWorth: number,
): ChallengeInvestmentUpdate => ({
  ...createBaseChallengeUpdate(challenge, user),
  investment: netWorth,
  description:
    ChallengeUpdateType.End +
    ` challenge with a final valuation of $ ${formatCurrency(netWorth)}`,
  type: ChallengeUpdateType.End,
})

export const createChallengeProfit = (
  challenge: Challenge,
  user: User,
  profit: number,
): ChallengeInvestmentUpdate => ({
  ...createBaseChallengeUpdate(challenge, user),
  investment: profit,
  description:
    ChallengeUpdateType.Collect + `$ ${formatCurrency(profit)} in profit`,
  type: ChallengeUpdateType.Collect,
})
