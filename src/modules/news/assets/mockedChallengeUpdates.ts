import { MOCKED_CHALLENGES } from '../../challenge/assets'
import { MOCKED_USERS } from '../../user/assets'
import {
  ChallengeUpdate,
  createChallengeAnnouncement,
  createChallengeCreationUpdate,
  createChallengeEnding,
  createChallengeInvestment,
  createChallengeMatch,
  createChallengeProfit,
  createChallengeProposalUpdate,
  createChallengeSolutionProposal,
  createChallengeUpdateFromMatch,
  createChallengeVote,
} from '../domain'

export const MOCKED_CHALLENG_UPDATES: ChallengeUpdate[] = [
  // 0
  createChallengeCreationUpdate(MOCKED_CHALLENGES[0], MOCKED_USERS[0]),

  // 1
  createChallengeVote(MOCKED_CHALLENGES[1], MOCKED_USERS[3]),
  createChallengeVote(MOCKED_CHALLENGES[1], MOCKED_USERS[2]),
  createChallengeVote(MOCKED_CHALLENGES[1], MOCKED_USERS[1]),
  createChallengeProposalUpdate(MOCKED_CHALLENGES[1], MOCKED_USERS[0]),
  createChallengeCreationUpdate(MOCKED_CHALLENGES[1], MOCKED_USERS[0]),

  // 2
  createChallengeSolutionProposal(MOCKED_CHALLENGES[2], MOCKED_USERS[6]),
  createChallengeSolutionProposal(MOCKED_CHALLENGES[2], MOCKED_USERS[7]),
  createChallengeSolutionProposal(MOCKED_CHALLENGES[2], MOCKED_USERS[8]),
  createChallengeAnnouncement(MOCKED_CHALLENGES[2], MOCKED_USERS[0]),
  createChallengeVote(MOCKED_CHALLENGES[2], MOCKED_USERS[1]),
  createChallengeProposalUpdate(MOCKED_CHALLENGES[2], MOCKED_USERS[0]),
  createChallengeCreationUpdate(MOCKED_CHALLENGES[2], MOCKED_USERS[0]),

  // 3
  createChallengeMatch(MOCKED_CHALLENGES[3], MOCKED_USERS[0], MOCKED_USERS[8]),
  createChallengeSolutionProposal(MOCKED_CHALLENGES[3], MOCKED_USERS[8]),
  createChallengeAnnouncement(MOCKED_CHALLENGES[3], MOCKED_USERS[0]),
  createChallengeVote(MOCKED_CHALLENGES[3], MOCKED_USERS[1]),
  createChallengeProposalUpdate(MOCKED_CHALLENGES[3], MOCKED_USERS[0]),
  createChallengeCreationUpdate(MOCKED_CHALLENGES[3], MOCKED_USERS[0]),

  // 4
  createChallengeInvestment(MOCKED_CHALLENGES[4], MOCKED_USERS[3], 50000),
  createChallengeInvestment(MOCKED_CHALLENGES[4], MOCKED_USERS[2], 100000),
  createChallengeInvestment(MOCKED_CHALLENGES[4], MOCKED_USERS[1], 10000),
  createChallengeMatch(MOCKED_CHALLENGES[4], MOCKED_USERS[0], MOCKED_USERS[6]),
  createChallengeSolutionProposal(MOCKED_CHALLENGES[4], MOCKED_USERS[6]),
  createChallengeAnnouncement(MOCKED_CHALLENGES[4], MOCKED_USERS[0]),
  createChallengeVote(MOCKED_CHALLENGES[4], MOCKED_USERS[3]),
  createChallengeVote(MOCKED_CHALLENGES[4], MOCKED_USERS[2]),
  createChallengeVote(MOCKED_CHALLENGES[4], MOCKED_USERS[1]),
  createChallengeProposalUpdate(MOCKED_CHALLENGES[4], MOCKED_USERS[0]),
  createChallengeCreationUpdate(MOCKED_CHALLENGES[4], MOCKED_USERS[0]),

  // 5
  createChallengeUpdateFromMatch(
    MOCKED_CHALLENGES[5],
    MOCKED_USERS[6],
    'Released MVP!!!',
  ),
  createChallengeUpdateFromMatch(
    MOCKED_CHALLENGES[5],
    MOCKED_USERS[6],
    'Beta version ready for open testing',
  ),
  createChallengeUpdateFromMatch(
    MOCKED_CHALLENGES[5],
    MOCKED_USERS[6],
    'Alpha version ready in internal testing',
  ),
  createChallengeInvestment(MOCKED_CHALLENGES[5], MOCKED_USERS[3], 50000),
  createChallengeMatch(MOCKED_CHALLENGES[5], MOCKED_USERS[0], MOCKED_USERS[6]),
  createChallengeSolutionProposal(MOCKED_CHALLENGES[5], MOCKED_USERS[6]),
  createChallengeAnnouncement(MOCKED_CHALLENGES[5], MOCKED_USERS[0]),
  createChallengeVote(MOCKED_CHALLENGES[5], MOCKED_USERS[3]),
  createChallengeProposalUpdate(MOCKED_CHALLENGES[5], MOCKED_USERS[0]),
  createChallengeCreationUpdate(MOCKED_CHALLENGES[5], MOCKED_USERS[0]),

  // 6
  createChallengeProfit(MOCKED_CHALLENGES[6], MOCKED_USERS[3], 1000000000),
  createChallengeEnding(MOCKED_CHALLENGES[6], MOCKED_USERS[0], 1001000000),
  createChallengeUpdateFromMatch(
    MOCKED_CHALLENGES[6],
    MOCKED_USERS[6],
    'Unicorn!',
  ),
  createChallengeInvestment(MOCKED_CHALLENGES[6], MOCKED_USERS[3], 1000000),
  createChallengeMatch(MOCKED_CHALLENGES[6], MOCKED_USERS[0], MOCKED_USERS[6]),
  createChallengeSolutionProposal(MOCKED_CHALLENGES[6], MOCKED_USERS[6]),
  createChallengeAnnouncement(MOCKED_CHALLENGES[6], MOCKED_USERS[0]),
  createChallengeVote(MOCKED_CHALLENGES[6], MOCKED_USERS[3]),
  createChallengeProposalUpdate(MOCKED_CHALLENGES[6], MOCKED_USERS[0]),
  createChallengeCreationUpdate(MOCKED_CHALLENGES[6], MOCKED_USERS[0]),
]
