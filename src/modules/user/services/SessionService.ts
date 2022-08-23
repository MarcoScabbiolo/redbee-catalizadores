import { BehaviorSubject, Observable } from 'rxjs'
import { User } from '../domain'

export class SessionService {
  private userSubject = new BehaviorSubject<User>({ id: 'id', name: 'A user' })

  user: Observable<User>

  constructor() {
    this.user = this.userSubject
  }
}
