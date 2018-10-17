import { Component, OnInit } from '@angular/core';
import { ScoreService } from '../services/score.service';
import { TimerObservable } from 'rxjs/observable/TimerObservable';
import 'rxjs/add/operator/takeWhile';
import {filter} from 'lodash';


@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  providers: [ScoreService]
})
export class LeaderboardComponent implements OnInit {

  public rankings: any[] = [];

  private _pollTime = 5000;

  constructor(private _scoreService: ScoreService) { }

  private _updateScores() {
    this._scoreService
      .getTopScores()
      .subscribe(
        (scores: any[]) => {
          console.log('scores', scores);
          this.rankings = scores;
        }
      );
  }

  public get displayableRankings(): any[] {
    return filter(this.rankings, r => r.isRenamed);
  }

  ngOnInit() {
    this._updateScores();
    // Update the scores every _pollTime.
    TimerObservable.create(0, this._pollTime)
      .subscribe(
        () => {
          this._updateScores();
        }
      );
  }

}
