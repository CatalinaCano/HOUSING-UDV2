import { Injectable } from '@angular/core';
import { Alojamiento } from '../models/alojamiento.model';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../config/config';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

declare var swal: any;
@Injectable()
export class RegistrarAlojamientoService {
  constructor(
    public http: HttpClient,
    public router: Router
  ) {
    console.log('Listos para registrar alojamiento');
  }

  crearAlojamiento(alojamiento: Alojamiento, id) {
    let url = URL_SERVICIOS + '/alojamiento' + '/' + id;
    return this.http.post( url , alojamiento)
     .map((resp: any ) => {
       console.log('se guardo con exito ' + '\n');
       console.log(resp.alojamientoGuardado._id);
       return resp.alojamientoGuardado._id;
      }).catch((err: any) => {
        console.log(err.error.errors);
        swal('Error', err.error.errors, 'error');
        this.router.navigate(['/inicio']);
        return Observable.throw(err);
      });
  }
}
