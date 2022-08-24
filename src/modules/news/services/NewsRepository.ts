import { BehaviorSubject, map, Observable } from 'rxjs'
import { ChallengeUpdate } from '../domain'

export class NewsRepository {
  private newsSubject = new BehaviorSubject<ChallengeUpdate[]>([])

  news: Observable<ChallengeUpdate[]>

  constructor() {
    this.news = this.newsSubject
  }

  newsByChallengeId(challengId: string): Observable<ChallengeUpdate[]> {
    return this.news.pipe(
      map(news => news.filter(n => n.challengeId === challengId)),
    )
  }

  newsByUserId(userId: string): Observable<ChallengeUpdate[]> {
    return this.news.pipe(map(news => news.filter(n => n.by.id === userId)))
  }
}
