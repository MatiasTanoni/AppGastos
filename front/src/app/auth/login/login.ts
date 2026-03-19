import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth-service';
import { FormsModule } from '@angular/forms';
import { Spinner } from '../../components/spinner/spinner';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, Spinner],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  user = '';
  password = '';
  messageError = '';

  showPassword = false;
  isLoading = false;

  constructor(private authService: AuthService, private router: Router) { }

  login() {
    // Si ya está cargando, ignoramos nuevos clicks
    if (this.isLoading) return;

    // Reseteamos el error y activamos el estado de carga
    this.messageError = '';
    this.isLoading = true;

    this.authService.login(this.user, this.password).subscribe({
      next: (respuesta: any) => {
        console.log(respuesta.mensaje);
        console.log("holaaa", respuesta.usuario);

        localStorage.setItem('isLogged', 'true');
        this.authService.guardarUsuario(respuesta.usuario.nombre);

        this.router.navigate(['/home']);
      },
      error: (error) => {
        console.error('Falló el login', error);
        this.messageError = 'Usuario o contraseña incorrectos';

        // Desactivamos la carga para que puedan volver a intentar
        this.isLoading = false;
      }
    });
  }
}