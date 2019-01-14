import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UsuarioService } from '../usuario/usuario.service';


@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(public _usuarioService: UsuarioService,
              public router: Router) {}

  canActivate() {

    if (this._usuarioService.logged()) {
      console.log('paso el guard');
      return true;
    } else {
      console.log('bloqueado por el guard');
      this.router.navigate(['/login']);
      return false;
    }

  }
}
