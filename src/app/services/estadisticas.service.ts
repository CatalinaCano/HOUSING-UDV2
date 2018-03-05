import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { URL_SERVICIOS } from '../config/config';

@Injectable()
export class EstadisticasService {

  constructor(
    public http: HttpClient,
    public router: Router
  ) { }

  cargarAlojamientos(desde: number = 0 ) {
    let url = URL_SERVICIOS + '/busqueda/admin/alojamientos?desde=' + desde;
    return this.http.get(url);
  }

}
