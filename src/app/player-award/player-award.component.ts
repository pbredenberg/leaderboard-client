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

    ngOnInit() {
        console.log(this.hasRaven);
    }

    protected get hasRaven() {
        return _.get(this.currentGame, 'players[' + this.playerIndex + '].hasRaven', false);
    }

    protected get hasPanda() {
        return _.get(this.currentGame, 'players[' + this.playerIndex + '].hasPanda', false);
    }

}
