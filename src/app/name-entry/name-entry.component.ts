import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-name-entry',
  templateUrl: './name-entry.component.html'
})
export class NameEntryComponent implements OnInit {

    public player1;

    public player2;

    public player3;

    public player4;

    constructor() { }

    send() {
        // Construct an array of names.
        const result = _.reduce(
            [this.player1, this.player2, this.player3, this.player4],
            (r, val) => {
                const arr = r && !!r.length ? r : [];
                if (val) {
                    arr.push(
                        {
                            name: val
                        }
                    );
                }
                return arr;
            },
            []
        );
        console.log('players', result);
    }

    ngOnInit() {
    }

}
