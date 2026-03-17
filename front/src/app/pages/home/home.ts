import { Component } from '@angular/core';
import { Movements } from '../../components/movements/movements';

@Component({
  selector: 'app-home',
  imports: [Movements],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  isModalOpen: boolean = false;

  abrirModal() {
    this.isModalOpen = true;
  }

  cerrarModal() {
    this.isModalOpen = false;
  }
}
