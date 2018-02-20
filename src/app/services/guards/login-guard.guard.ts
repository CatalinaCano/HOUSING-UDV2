import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { EstudianteService } from '../estudiante.service';



@Injectable()
export class LoginGuardGuard implements CanActivate {
  constructor(
              public _estudianteService: EstudianteService,
              public router: Router
            ) {

                }

  canActivate() {
    if (this._estudianteService.estaLogueado()) {
      console.log('paso el guard');
      return true;
    } else {
      console.log('bloquedao por el guard');
      this.router.navigate(['/login']);
     return false;
    }
  }
}
