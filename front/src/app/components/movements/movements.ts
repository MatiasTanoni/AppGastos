import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movements',
  imports: [],
  templateUrl: './movements.html',
  styleUrl: './movements.css',
})
export class Movements {
  // 1. Creamos el emisor de eventos
  @Output() cerrarModal = new EventEmitter<void>();

  // 2. Esta función "dispara" el evento hacia afuera
  onCerrar() {
    this.cerrarModal.emit();
  }
}
