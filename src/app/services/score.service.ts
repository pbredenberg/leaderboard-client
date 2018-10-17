import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class ScoreService {

  constructor(private _http: HttpClient) { }

  /**
   * Performs GET from server to retrieve top scores.
   */
  public getTopScores() {
    return this._http.get(environment.api_url + '/top-scores');
  }

  /**
   * GET games.
   */
  public getGames() {
    return this._http.get(environment.api_url + '/games');
  }

  /**
   * POST single game.
   * @param game
   */
  public updateGame(game: any) {
      return this._http.post(
        environment.api_url + '/games',
        game
      );
  }

}
