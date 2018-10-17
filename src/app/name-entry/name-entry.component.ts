import { Component, OnInit } from '@angular/core';
import { ScoreService } from '../services/score.service';
import { TimerObservable } from 'rxjs/observable/TimerObservable';
import {sortBy, get, reduce, uniqWith, isEqual, each} from 'lodash';

@Component({
  selector: 'app-name-entry',
  templateUrl: './name-entry.component.html',
  providers: [ScoreService]
})
export class NameEntryComponent implements OnInit {

    public player1Name: string;

    public player2Name: string;

    public player3Name: string;

    public player4Name: string;

    public games: any[] = [];

    private _pollTime = 10000;

    constructor(private _scoreService: ScoreService) { }

    /**
     * Checks if the game is at zero index and if it's created/updated
     * timatestamps match. This indicates a new game with unrecorded
     * player data.
     * @param index
     * @param game
     */
    isGameViable(game) {
        return get(game, 'timeUpdated', 0) === get(game, 'timeCreated', 1);
    }

    send(i) {
        // Construct an array of names.
        console.log('submit index', i);
        const relatedGame = this.games[i];
        const result = reduce(
            [this.player1Name, this.player2Name, this.player3Name, this.player4Name],
            (r, val, key) => {
                const arr = r && !!r.length ? r : [];
                if (val) {
                    arr.push(
                        {
                            name: val,
                            score: get(relatedGame, 'players[' + key + '].score'),
                            caughtPanda: get(relatedGame, 'players[' + key + '].caughtPanda'),
                            foundRaven: get(relatedGame, 'players[' + key + '].foundRaven'),
                            isRenamed: true
                        }
                    );
                }
                return arr;
            },
            []
        );
        relatedGame.players = result;
        this._scoreService
            .updateGame(relatedGame)
            .subscribe(
                response => {
                    const updateResult = get(response, 'msg');
                    if (updateResult === 'success') {
                        console.log('result', response);
                        this.games.splice(i, 1);
                        this._reset();
                    }
                }
            );
    }

    private _reset() {
        this.player1Name = '';
        this.player2Name = '';
        this.player3Name = '';
        this.player4Name = '';
    }

    private _getUpdatedGames() {
        this._scoreService
            .getGames()
            .subscribe(
                games => {
                    const currentGames = this.games;
                    each(
                        games,
                        (g, i) => {
                            if (this.isGameViable(g)) {
                                currentGames.push(g);
                            }
                        }
                    );
                    this.games = uniqWith(currentGames, isEqual);
                    console.log('updated games', this.games);
                }
            );
    }

    isWinner(
        gameIndex: number,
        playerScore: number
    ) {
        const highestScore = sortBy(this.games[gameIndex].players, p => p.score).pop();
        return highestScore.score === playerScore;
    }

    ngOnInit() {
        this._getUpdatedGames();

        TimerObservable.create(0, this._pollTime)
            .subscribe(
                () => {
                    this._getUpdatedGames();
                }
            );
    }

}
