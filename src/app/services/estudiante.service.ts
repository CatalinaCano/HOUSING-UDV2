import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../config/config';
import { Estudiante } from '../models/estudiante.model';
import { Router } from '@angular/router';

declare const gapi: any;
@Injectable()
export class EstudianteService {
    estudiante: Estudiante;
    token: string;
    img: string;
    matchUsuario: string;
    auth2: any;
    idUsuario: string;
    nombresUsuario: string;

  constructor(
    public http: HttpClient,
    public router: Router
  ) {
    this.cargarStorage();

    }



estaLogueado() {
  if (this.estudiante == null) {
    console.log(this.token);
    localStorage.removeItem('token');
    localStorage.clear();
    return false;
  } else {
    console.log('esta logueado ' + this.token.length);
    this.matchUsuario = this.estudiante.email.split('@', 1).toString();
    console.log('Correo: ' + this.matchUsuario);
    this.obtenerMatchID();
    return true;
  }

}

cargarStorage() {
  if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
      this.estudiante = JSON.parse(localStorage.getItem('estudiante'));
      this.img = localStorage.getItem('imagenUsuario');
      this.nombresUsuario = localStorage.getItem('nombres');
  } else {
    this.token = '';
    this.estudiante = null;
    this.img = '';
    this.nombresUsuario = '';
  }
}


  guardarStorage(token: string, imagenUsuario: string, idUsuario: string, nombres: string, estudianteBD: Estudiante) {
    localStorage.setItem('token', token);
    localStorage.setItem('imagenUsuario', imagenUsuario);
    localStorage.setItem('estudianteBD', JSON.stringify(estudianteBD));
    localStorage.setItem('idUsuario', idUsuario);
    localStorage.setItem('nombres', nombres);
    this.estudiante = estudianteBD;
    this.img = imagenUsuario;
    this.token = token;
    this.idUsuario = idUsuario;
    this.nombresUsuario = nombres;
  }

  obtenerStorage() {
    let usuario = JSON.parse( localStorage.getItem('estudianteBD'));
    return usuario;
  }

  loginGoogle(token: string) {
    let url = URL_SERVICIOS + '/login/google';
    return this.http.post(url, {token: token})
    .map((resp: any) => {
      this.guardarStorage(resp.token, resp.imagenUsuario, resp.idUsuario, resp.nombres, resp.estudianteBD);
        return true;
    });


  }

  signOut() {
    this.auth2 = gapi.auth2.getAuthInstance();
    this.auth2.signOut().then(function () {
      console.log('User signed out.');
      window.location.href = 'https://mail.google.com/mail/u/0/?logout&hl=en';
    });
  }

  obtenerMatchID() {
    return this.matchUsuario;
  }

  obtenerNombres() {
    return this.nombresUsuario;
  }
  obtenerImagen() {
    let img = localStorage.getItem('imagenUsuario');
    return img;
  }
}
