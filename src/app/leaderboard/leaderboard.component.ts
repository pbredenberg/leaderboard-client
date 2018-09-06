import { Component, OnInit } from '@angular/core';
import { ScoreService } from '../services/score.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss'],
  providers: [ScoreService]
})
export class LeaderboardComponent implements OnInit {

  public rankings: any[] = [];

  constructor(private _scoreService: ScoreService) { }

  ngOnInit() {
    this._scoreService
      .GetTopScores()
      .subscribe(
        (scores: any[]) => {
          console.log('scores', scores);
          this.rankings = scores;
        }
      );
  }

}
