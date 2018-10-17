import { Component, OnInit, Input } from '@angular/core';
import * as _ from 'lodash';

@Component({
    selector: 'app-player-award',
    templateUrl: './player-award.component.html',
    styleUrls: ['./player-award.component.scss']
})
export class PlayerAwardComponent implements OnInit {

    @Input() playerIndex: number;

    @Input() currentGame: any;

    constructor() { }

    ngOnInit() {}

    public get foundRaven() {
        return _.get(this.currentGame, 'players[' + this.playerIndex + '].foundRaven', false);
    }

    public get caughtPanda() {
        return _.get(this.currentGame, 'players[' + this.playerIndex + '].caughtPanda', false);
    }

}
