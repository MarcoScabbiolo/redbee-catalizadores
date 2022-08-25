import { MOCKED_CHALLENGES } from '../../challenge/assets'
import { MOCKED_USERS } from '../../user/assets'
import {
  ChallengeUpdate,
  createChallengeAnnouncement,
  createChallengeCreationUpdate,
  createChallengeSolutionProposal,
  createChallengeVote,
} from '../domain'

export const MOCKED_CHALLENG_UPDATES: ChallengeUpdate[] = [
  // 0
  createChallengeVote(MOCKED_CHALLENGES[0], MOCKED_USERS[3]),
  createChallengeVote(MOCKED_CHALLENGES[0], MOCKED_USERS[2]),
  createChallengeVote(MOCKED_CHALLENGES[0], MOCKED_USERS[1]),
  createChallengeCreationUpdate(MOCKED_CHALLENGES[0], MOCKED_USERS[0]),

  // 1
  createChallengeSolutionProposal(MOCKED_CHALLENGES[1], MOCKED_USERS[6]),
  createChallengeSolutionProposal(MOCKED_CHALLENGES[1], MOCKED_USERS[7]),
  createChallengeSolutionProposal(MOCKED_CHALLENGES[1], MOCKED_USERS[8]),
  createChallengeAnnouncement(MOCKED_CHALLENGES[1], MOCKED_USERS[0]),
  createChallengeVote(MOCKED_CHALLENGES[1], MOCKED_USERS[1]),
  createChallengeCreationUpdate(MOCKED_CHALLENGES[1], MOCKED_USERS[0]),
]
