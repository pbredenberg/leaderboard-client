import { Routes } from '@angular/router';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { NameEntryComponent } from './name-entry/name-entry.component';

export const appRoutes: Routes = [
    {
        path: 'leaderboard',
        component: LeaderboardComponent
    },
    {
        path: '',
        redirectTo: 'leaderboard',
        pathMatch: 'full'
    },
    {
        path: 'player-entry',
        component: NameEntryComponent
    }
];
