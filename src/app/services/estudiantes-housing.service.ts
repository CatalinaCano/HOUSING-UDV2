import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../config/config';
import { Estudiante } from '../models/estudiante.model';
import { Router } from '@angular/router';


@Injectable()
export class EstudiantesHousingService {

  constructor(
    public http: HttpClient,
    public router: Router
  ) { }


  crearEstudiante(estudiante) {
    let url = URL_SERVICIOS + '/estudiante';
    return this.http.post(url, estudiante);
  }

  cargarUsuarios( desde: number= 0 ) {

    let url = URL_SERVICIOS + '/estudiante?desde=' + desde;
    return this.http.get(url);
  }

  buscarEstudiante( termino: string ) {
      let url = URL_SERVICIOS + '/busqueda/estudiantes/' + termino;
     return this.http.get(url)
                 .map( (res: any) => res.estudiantes);

  }

  borrarEstudiante (id: string ) {
    let url = URL_SERVICIOS + '/estudiante/' + id;
    return this.http.delete(url)
                .map(resp => {
                  swal('Estudiante Borrado', 'Estudiante eliminado correctamente', 'success');
                  return true;
                });
  }

}
