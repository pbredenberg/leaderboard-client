import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ScoreService {

  constructor(private _http: HttpClient) { }

  /**
   * Performs GET from server to retrieve top scores.
   */
  public GetTopScores() {
    return this._http.get('http://localhost:3000/top-scores');
  }

}
