import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ScoreService {

  constructor(private _http: HttpClient) { }

  /**
   * Performs GET from server to retrieve top scores.
   */
  public getTopScores() {
    return this._http.get('http://localhost:3000/top-scores');
  }

  /**
   * GET games.
   */
  public getGames() {
    return this._http.get('http://localhost:3000/games');
  }

  /**
   * POST single game.
   * @param game
   */
  public updateGame(game: any) {
      return this._http.post(
        'http://localhost:3000/games',
        game
      );
  }

}
