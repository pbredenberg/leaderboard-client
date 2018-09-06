import { Component, OnInit } from '@angular/core';
import { ScoreService } from '../services/score.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss'],
  providers: [ScoreService]
})
export class LeaderboardComponent implements OnInit {

  constructor(private _scoreService: ScoreService) { }

  ngOnInit() {
    this._scoreService
      .GetTopScores()
      .subscribe(
        scores => {
          console.log('scores', scores);
        }
      );
  }

}
