import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'home',
        loadComponent: () => import('./pages/home/home').then(m => m.Home)
    },
    {
        path: 'stats',
        loadComponent: () => import('./pages/stats/stats').then(m => m.Stats)
    },
    {
        path: 'login',
        loadComponent: () => import('./auth/login/login').then(m => m.Login)
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];
