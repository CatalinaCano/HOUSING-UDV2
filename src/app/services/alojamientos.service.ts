import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../config/config';
import { Alojamiento } from '../models/alojamiento.model';
import { AlojamientoConsulta } from '../models/alojamientoConsulta.model';

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

  }
