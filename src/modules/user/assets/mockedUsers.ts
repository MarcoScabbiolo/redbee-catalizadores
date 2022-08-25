import { User } from '../domain'

export const MOCKED_USERS: User[] = Array.from({ length: 10 }).map((_, i) => ({
  id: (i + 1).toString(),
  name: `User ${i + 1}`,
}))
