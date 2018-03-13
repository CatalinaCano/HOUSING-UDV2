import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../config/config';
import { Alojamiento } from '../models/alojamiento.model';
import { AlojamientoConsulta } from '../models/alojamientoConsulta.model';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class AlojamientosService {



  constructor(
    public http: HttpClient
  ) {

  }

  cargarAlojamientos() {
    let url = URL_SERVICIOS + '/busqueda/galeria';
    return this.http.get(url);
  }

  buscarAlojamiento(idAlojamiento: string) {
    let url = URL_SERVICIOS + '/busqueda/alojamiento/' + idAlojamiento;
    return this.http.get(url);
  }

  borrarAlojamiento(idAlojamiento: string) {
      let url = URL_SERVICIOS + '/alojamiento/' + idAlojamiento;
      return this.http.delete(url);

  }

  actualizarEstadoAlojamiento(alojamiento) {
     let url = URL_SERVICIOS + '/alojamiento/estadoAlojamiento/' + alojamiento._id;
    console.log(alojamiento);
    return this.http.put(url, alojamiento)
                .map((resp: any) => {
                  swal('Alojamiento Actualizado', alojamiento.estudiante.email, 'success');
                  return true;
                }).catch( err => {
                    swal('Error', err.mensaje, 'error');
                    return Observable.throw(err);
                });

  }

  buscar(termino) {
    let url = URL_SERVICIOS + '/busqueda/alojamientos/' + termino;
    return this.http.get(url);
  }

  buscarPorFiltro(sede, hospedanA, tipoAlojamiento, habitacion) {
    let url = URL_SERVICIOS + '/busqueda/alojamientos/' + sede + '/' + hospedanA + '/' + tipoAlojamiento + '/' + habitacion;
    console.log(url);
     return this.http.get(url);
  }

  }
