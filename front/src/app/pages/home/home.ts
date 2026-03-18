import { Component, inject } from '@angular/core';
import { Movements } from '../../components/movements/movements';
import { AuthService } from '../../services/auth-service';
import { TitleCasePipe } from '@angular/common';
@Component({
  selector: 'app-home',
  imports: [Movements, TitleCasePipe],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  authService = inject(AuthService);
  isModalOpen: boolean = false;

  abrirModal() {
    this.isModalOpen = true;
  }

  cerrarModal() {
    this.isModalOpen = false;
  }
}
