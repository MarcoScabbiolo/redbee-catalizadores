import { BehaviorSubject, map, Observable } from 'rxjs'
import { Challenge } from '../../challenge'
import { User } from '../../user/domain'
import { MOCKED_CHALLENG_UPDATES } from '../assets'
import {
  ChallengeUpdate,
  ChallengeUpdateType,
  createChallengeVote,
} from '../domain'

export class NewsRepository {
  private newsSubject = new BehaviorSubject<ChallengeUpdate[]>(
    MOCKED_CHALLENG_UPDATES,
  )

  news: Observable<ChallengeUpdate[]>

  constructor() {
    this.news = this.newsSubject
  }

  toggleVoteForChallenge(challenge: Challenge, user: User) {
    const isVote = makeVoteByChallengeIdAndUserId(challenge.id, user.id)
    const previous = this.newsSubject.value.find(isVote)

    if (previous) {
      this.newsSubject.next(this.newsSubject.value.filter(v => !isVote(v)))
    } else {
      this.newsSubject.next([
        ...this.newsSubject.value,
        createChallengeVote(challenge, user),
      ])
    }
  }

  newsByChallengeId(challengId: string): Observable<ChallengeUpdate[]> {
    return this.news.pipe(
      map(news => news.filter(n => n.challengeId === challengId)),
    )
  }

  newsByUserId(userId: string): Observable<ChallengeUpdate[]> {
    return this.news.pipe(map(news => news.filter(n => n.by.id === userId)))
  }

  newsByChallengeIds(challengeIds: string[]): Observable<ChallengeUpdate[]> {
    return this.news.pipe(
      map(news => news.filter(n => challengeIds.includes(n.challengeId))),
    )
  }

  votesByChallengeId(challengeId: string): Observable<ChallengeUpdate[]> {
    return this.news.pipe(
      map(news =>
        news.filter(
          n =>
            n.challengeId === challengeId &&
            n.type === ChallengeUpdateType.Vote,
        ),
      ),
    )
  }
}

const makeVoteByChallengeIdAndUserId =
  (challengeId: string, userId: string) =>
  (challenge: ChallengeUpdate): boolean =>
    challenge.challengeId === challengeId &&
    challenge.by.id === userId &&
    challenge.type === ChallengeUpdateType.Vote
