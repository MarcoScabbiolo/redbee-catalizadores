import { MOCKED_CHALLENGES } from '../../challenge/assets'
import { MOCKED_USERS } from '../../user/assets'
import { ChallengeUpdate } from '../domain'

export const MOCKED_CHALLENG_UPDATES: ChallengeUpdate[] = [
  {
    challengeId: MOCKED_CHALLENGES[0].id,
    challengeName: MOCKED_CHALLENGES[0].name,
    by: MOCKED_USERS[0],
    description: 'Created the challenge',
  },
]
