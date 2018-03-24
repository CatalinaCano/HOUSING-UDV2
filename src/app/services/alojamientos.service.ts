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
    return this.http.get(url).catch(err => {
      swal('Error', 'Error al cargar alojamientos', 'error');
      return Observable.throw(err);
    });
  }

  buscarAlojamiento(idAlojamiento: string) {
    let url = URL_SERVICIOS + '/busqueda/alojamiento/' + idAlojamiento;
    return this.http.get(url).catch(err => {
      swal('Error', 'Error al buscar alojamiento', 'error');
      return Observable.throw(err);
    });
  }

  borrarAlojamiento(idAlojamiento: string) {
      let url = URL_SERVICIOS + '/alojamiento/' + idAlojamiento;
    return this.http.delete(url).catch(err => {
      swal('Error', 'Error al borrar alojamiento', 'error');
      return Observable.throw(err);
    });

  }


  actualizarEstadoAlojamiento(alojamiento) {
    let url = URL_SERVICIOS + '/alojamiento/estadoAlojamiento/' + alojamiento._id + '/' + alojamiento.propiedadesAlojamiento.estadoAlojamiento;
   console.log(alojamiento);
   return this.http.put(url, alojamiento)
               .map((resp: any) => {
                 swal('Alojamiento Actualizado', alojamiento.estudiante.email, 'success');
                 return true;
               }).catch( err => {
                   swal('Error', 'Error al actualizar el estado del alojamiento', 'error');
                   return Observable.throw(err);
               });

 }

  actualizarEstadoPublicacionAlojamiento(alojamiento) {
     let url = URL_SERVICIOS + '/alojamiento/estadoPublicacionAlojamiento/' + alojamiento._id + '/' + alojamiento.propiedadesAlojamiento.estadoPublicacionAlojamiento;
    console.log(alojamiento);
    return this.http.put(url, alojamiento)
                .map((resp: any) => {
                  swal('Alojamiento Actualizado', alojamiento.estudiante.email, 'success');
                  return true;
                }).catch( err => {
                    swal('Error', 'Error al actualizar el estado del alojamiento', 'error');
                    return Observable.throw(err);
                });

  }

  buscar(termino) {
    let url = URL_SERVICIOS + '/busqueda/alojamientos/' + termino;
    return this.http.get(url)
      .catch(err => {
        swal('Error', 'Error al buscar el termino',  'error');
        return Observable.throw(err);
      });
  }

  buscarPorFiltro(sede, hospedanA, tipoAlojamiento, habitacion) {
    let url = URL_SERVICIOS + '/busqueda/alojamientos/' + sede + '/' + hospedanA + '/' + tipoAlojamiento + '/' + habitacion;
     return this.http.get(url)
                .catch( err => {
                  swal('Error', 'Error al buscar por filtros', 'error');
                  return Observable.throw(err);
                });
  }


  buscarPorSede(sede) {
    let url = URL_SERVICIOS + '/busqueda/admin?sede=' + sede;
    return this.http.get(url)
      .catch(err => {
        swal('Error', 'Erro al buscar por sede' , 'error');
        return Observable.throw(err);
      });
  }

  buscarPorHospedanA(hospedanA) {
    let url = URL_SERVICIOS + '/busqueda/admin?hospedanA=' + hospedanA;
    return this.http.get(url)
      .catch(err => {
        swal('Error', 'Error al buscar por tipo de persona', 'error');
        return Observable.throw(err);
      });
  }

  buscarPorEstadoPublicacionAlojamiento(estadoPublicacion) {
    let url = URL_SERVICIOS + '/busqueda/admin?estadoPublicacionAlojamiento=' + estadoPublicacion;
    console.log(url);
    return this.http.get(url)
      .catch(err => {
        swal('Error', 'Error al buscar por estado de publicación', 'error');
        return Observable.throw(err);
      });
  }
  buscarPorEstadoAlojamiento(estadoAlojamiento) {
    console.log('buscar con' + estadoAlojamiento);
    let url = URL_SERVICIOS + '/busqueda/admin?estadoAlojamiento=' + estadoAlojamiento;
    console.log(url);
    return this.http.get(url)
      .catch(err => {
        swal('Error', 'Error al buscar por estado del alojamiento', 'error');
        return Observable.throw(err);
      });
  }
  }
