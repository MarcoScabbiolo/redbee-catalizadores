import { BehaviorSubject, map, Observable } from 'rxjs'
import { MOCKED_CHALLENGES } from '../assets'
import { Challenge } from '../domain'

export class ChallengeRepository {
  private challengesSubject = new BehaviorSubject<Challenge[]>(
    Array.from(MOCKED_CHALLENGES.values()),
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
      map(cs => cs.filter(c => c.owners.includes(userId))),
    )
  }
}
