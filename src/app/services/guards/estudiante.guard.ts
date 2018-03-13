import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { EstudianteService } from '../estudiante.service';

@Injectable()
export class EstudianteGuard implements CanActivate {

  constructor(public _estudianteService: EstudianteService,
    public router: Router) { }

  canActivate() {
    if (this._estudianteService.estudiante.role === 'ESTUDIANTE') {
      return true;
    }
    console.log('bloqueado');
    this.router.navigate(['/inicio']);
    return false;
  }
}
