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

  enviarCorreo(mail: string) {
    let url = URL_SERVICIOS + '/correo/enEstudio/' + mail;
    console.log(url);
    return this.http.post(url, mail);
  }
  enviarCorreoAceptado(correo) {
    let url = URL_SERVICIOS + '/correo/aceptado';
    return this.http.post(url, correo);
  }

  enviarCorreoRechazado(correo) {
    let url = URL_SERVICIOS + '/correo/rechazado';
    return this.http.post(url, correo);
  }

}
