import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { URL_SERVICIOS } from '../config/config';


@Injectable()
export class EnviarCorreoService {

  constructor(
    public http: HttpClient,
    public router: Router
  ) { }

  enviarCorreoAceptado(correo) {
    let url = URL_SERVICIOS + '/correo/aceptado';
    console.log(url);
    return this.http.post(url, correo);
  }

  enviarCorreoRechazado(correo) {
    let url = URL_SERVICIOS + '/correo/rechazado';
    console.log(url);
    return this.http.post(url, correo);
  }
}
