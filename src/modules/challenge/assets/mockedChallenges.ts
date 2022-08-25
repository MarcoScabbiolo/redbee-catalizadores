import { MOCKED_USERS } from '../../user/assets'
import { Challenge, ChallengeStatus } from '../domain'

export const MOCKED_CHALLENGES: Challenge[] = [
  {
    id: '1',
    status: ChallengeStatus.Proposal,
    name: 'Proposed challenge',
    description: 'A challenge to create a unit solution to serve this need',
    owners: [MOCKED_USERS[0].id],
  },
  {
    id: '2',
    status: ChallengeStatus.Announcement,
    name: 'Announced challenge',
    description: 'A challenge to create a unit solution to serve this need',
    owners: [MOCKED_USERS[0].id],
  },
  {
    id: '3',
    status: ChallengeStatus.Match,
    name: 'Matched challenge',
    description: 'A challenge to create a unit solution to serve this need',
    owners: [MOCKED_USERS[0].id],
  },
  {
    id: '4',
    status: ChallengeStatus.Invested,
    name: 'Invested challenge',
    description: 'A challenge to create a unit solution to serve this need',
    owners: [MOCKED_USERS[0].id],
  },
  {
    id: '5',
    status: ChallengeStatus.Updated,
    name: 'Updated challenge',
    description: 'A challenge to create a unit solution to serve this need',
    owners: [MOCKED_USERS[0].id],
  },
  {
    id: '6',
    status: ChallengeStatus.Prospect,
    name: 'Prospect challenge',
    description: 'A challenge to create a unit solution to serve this need',
    owners: [MOCKED_USERS[0].id],
  },
  {
    id: '7',
    status: ChallengeStatus.Ended,
    name: 'Ended challenge',
    description: 'A challenge to create a unit solution to serve this need',
    owners: [MOCKED_USERS[0].id],
  },

  {
    id: '8',
    status: ChallengeStatus.Prospect,
    name: 'Prospect challenge',
    description: 'A challenge to create a unit solution to serve this need',
    owners: [],
  },
  {
    id: '9',
    status: ChallengeStatus.Prospect,
    name: 'Prospect challenge',
    description: 'A challenge to create a unit solution to serve this need',
    owners: [],
  },
  {
    id: '10',
    status: ChallengeStatus.Prospect,
    name: 'Prospect challenge',
    description: 'A challenge to create a unit solution to serve this need',
    owners: [],
  },
  {
    id: '11',
    status: ChallengeStatus.Prospect,
    name: 'Prospect challenge',
    description: 'A challenge to create a unit solution to serve this need',
    owners: [],
  },
  {
    id: '12',
    status: ChallengeStatus.Prospect,
    name: 'Prospect challenge',
    description: 'A challenge to create a unit solution to serve this need',
    owners: [],
  },
  {
    id: '13',
    status: ChallengeStatus.Prospect,
    name: 'Prospect challenge',
    description: 'A challenge to create a unit solution to serve this need',
    owners: [],
  },
]
