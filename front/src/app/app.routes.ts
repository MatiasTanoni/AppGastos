import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        // 1. Atrapamos cuando entran a la raíz de la app (localhost:4200)
        path: '',
        redirectTo: 'login',
        pathMatch: 'full' // Esto es clave: exige que la URL esté exactamente vacía para redirigir
    },
    {
        path: 'login',
        loadComponent: () => import('./auth/login/login').then(m => m.Login)
    },
    {
        path: 'home',
        loadComponent: () => import('./pages/home/home').then(m => m.Home)
    },
    {
        path: 'stats',
        loadComponent: () => import('./pages/stats/stats').then(m => m.Stats)
    },
    {
        path: '**',
        redirectTo: 'login'
    }
];