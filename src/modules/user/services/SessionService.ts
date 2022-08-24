import { BehaviorSubject, Observable } from 'rxjs'
import { MOCKED_USERS } from '../assets'
import { User } from '../domain'

export class SessionService {
  private userSubject = new BehaviorSubject<User>(MOCKED_USERS[0])

  user: Observable<User>

  constructor() {
    this.user = this.userSubject
  }
}
