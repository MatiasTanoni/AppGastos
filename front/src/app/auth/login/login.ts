import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  // Estas variables se conectan a tus inputs en el HTML con [(ngModel)]
  user = '';
  password = '';
  messageError = '';

  constructor(private authService: AuthService, private router: Router) { }

  login() {
    this.authService.login(this.user, this.password).subscribe({
      next: (respuesta: any) => {
        console.log(respuesta.mensaje); // "¡Login exitoso, bro!"

        this.router.navigate(['/home']);
      },
      error: (error) => {
        // Si el backend responde con error (ej. credenciales incorrectas)
        console.error('Falló el login', error);
        this.messageError = 'Usuario o contraseña incorrectos';
      }
    });
  }
}
