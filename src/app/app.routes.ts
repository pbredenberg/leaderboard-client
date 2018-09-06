import { Routes } from '@angular/router';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';

export const appRoutes: Routes = [
    {
        path: 'leaderboard',
        component: LeaderboardComponent
    },
    {
        path: '',
        redirectTo: '/leaderboard',
        pathMatch: 'full'
    }
];
