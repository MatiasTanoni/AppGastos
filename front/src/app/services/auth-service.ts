import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/auth/login';

  // 1. Creamos la Signal. Inicia en null.
  usuarioActual = signal<string | null>(null);

  constructor(private http: HttpClient) {
    // Si recarga la página, recuperamos el nombre del navegador
    const nombreGuardado = localStorage.getItem('usuarioNombre');
    if (nombreGuardado) {
      this.usuarioActual.set(nombreGuardado);
    }
  }

  login(nombre: string, password: string) {
    return this.http.post<any>(this.apiUrl, { nombre, password });
  }

  // 2. Función para actualizar la Signal cuando el login es exitoso
  guardarUsuario(nombre: string) {
    this.usuarioActual.set(nombre);
    localStorage.setItem('usuarioNombre', nombre);
  }
}