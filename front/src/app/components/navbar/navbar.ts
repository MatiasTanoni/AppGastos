import { Component, inject } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { AuthService } from '../../services/auth-service';
import { TitleCasePipe } from '@angular/common';


@Component({
  selector: 'app-navbar',
  imports: [RouterLink, TitleCasePipe],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  isMobileMenuOpen: boolean = false;

  authService = inject(AuthService);
  router = inject(Router);

  toggleMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  logOut() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
