import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const authGuard = () => {
    const router = inject(Router);

    const isLogged = localStorage.getItem('isLogged');

    if (isLogged === 'true') {
        return true;
    } else {
        router.navigate(['/login']);
        return false;
    }
};