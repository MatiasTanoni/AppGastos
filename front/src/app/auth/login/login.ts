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
  user = '';
  password = '';
  messageError = '';

  constructor(private authService: AuthService, private router: Router) { }

  login() {
    this.authService.login(this.user, this.password).subscribe({
      next: (respuesta: any) => {
        console.log(respuesta.mensaje);
        console.log("holaaa", respuesta.usuario);

        this.authService.guardarUsuario(respuesta.usuario.nombre);

        this.router.navigate(['/home']);
      },
      error: (error) => {
        console.error('Falló el login', error);
        this.messageError = 'Usuario o contraseña incorrectos';
      }
    });
  }
}
