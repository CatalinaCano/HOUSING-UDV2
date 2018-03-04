import { Injectable } from '@angular/core';
import { Alojamiento } from '../models/alojamiento.model';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../config/config';
import 'rxjs/add/operator/map';

@Injectable()
export class RegistrarAlojamientoService {
  constructor(
    public http: HttpClient
  ) {
    console.log('Listos para registrar alojamiento');
  }

  crearAlojamiento(alojamiento: Alojamiento, id) {
    console.log('se regustra alojamiento con id:' + id);
    let url = URL_SERVICIOS + '/alojamiento' + id;
    return this.http.post( url , alojamiento)
     .map((resp: any ) => {
       swal('Registro Exitoso', 'El registro se ha almacenado con éxito', 'success');
        return resp.alojamiento;

     });
  }
}
