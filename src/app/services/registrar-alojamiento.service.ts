import { Injectable } from '@angular/core';
import { Alojamiento } from '../models/alojamiento.model';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../config/config';
import 'rxjs/add/operator/map';
import swal from 'sweetalert';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RegistrarAlojamientoService {
  constructor(
    public http: HttpClient
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
        swal('Error', err.error.mensaje, 'error');
        return Observable.throw(err);
      });
  }
}
