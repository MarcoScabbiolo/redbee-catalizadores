import { BehaviorSubject, map, Observable } from 'rxjs'
import { Challenge, ChallengeStatus } from '../domain'

const INITIAL_MOCK_DATA_ENABLED = true

export class ChallengeRepository {
  private challengesSubject = new BehaviorSubject<Challenge[]>(
    INITIAL_MOCK_DATA_ENABLED ? INITIAL_MOCK_DATA : [],
  )

  challenges: Observable<Challenge[]>

  constructor() {
    this.challenges = this.challengesSubject
  }

  addProject(project: Challenge) {
    this.challengesSubject.next([...this.challengesSubject.getValue(), project])
  }

  getByUserId(userId: string): Observable<Challenge[]> {
    return this.challenges.pipe(
      map(cs => cs.filter(c => c.viewers.includes(userId))),
    )
  }
}

const INITIAL_MOCK_DATA: Challenge[] = [
  {
    status: ChallengeStatus.Prospect,
    name: 'A project',
    description: 'We want to change the entire world and we will do it',
    viewers: ['id'],
  },
]
