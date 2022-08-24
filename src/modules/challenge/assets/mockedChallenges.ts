import { MOCKED_USERS } from '../../user/assets'
import { Challenge, ChallengeStatus } from '../domain'

export const MOCKED_CHALLENGES: Challenge[] = [
  {
    id: '1',
    status: ChallengeStatus.Prospect,
    name: 'A project',
    description: 'We want to change the entire world and we will do it',
    viewers: [MOCKED_USERS[0].id],
  },
]
