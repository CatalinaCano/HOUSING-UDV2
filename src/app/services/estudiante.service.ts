import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../config/config';
import { Estudiante } from '../models/estudiante.model';
import { Router } from '@angular/router';

@Injectable()
export class EstudianteService {
    estudiante: Estudiante;
    token: string;
    img: string;


  constructor(
    public http: HttpClient,
    public router: Router
  ) {
    this.cargarStorage();
    }


  obtenerImagen() {
  let img = localStorage.getItem('imagenUsuario');
  return img;
}

estaLogueado() {
  if (this.estudiante == null) {
    console.log(this.token);
    localStorage.removeItem('token');
    localStorage.clear();
    return false;
  } else {
    console.log('esta logueado ' + this.token.length);
    return true;
  }

}

cargarStorage() {
  if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
      this.estudiante = JSON.parse(localStorage.getItem('estudiante'));
    this.img = localStorage.getItem('imagenUsuario');
  } else {
    this.token = '';
    this.estudiante = null;
    this.img = '';
  }
}


  guardarStorage(token: string, imagenUsuario: string,  estudianteBD: Estudiante) {
    localStorage.setItem('token', token);
    localStorage.setItem('imagenUsuario', imagenUsuario);
    localStorage.setItem('estudianteBD', JSON.stringify(estudianteBD));
    this.estudiante = estudianteBD;
    this.img = imagenUsuario;
    this.token = token;


  }

  obtenerStorage() {
    let usuario = JSON.parse( localStorage.getItem('estudianteBD'));
    return usuario;
  }


  logout() {
    this.estudiante = null;
    this.token = '';
    this.img = '';
    localStorage.clear();
     localStorage.setItem('estudianteBD', null);
     localStorage.setItem('token', null);
     window.location.href = 'https://mail.google.com/mail/u/0/?logout&hl=en';

    /*let url = URL_SERVICIOS + '/logout';
    return this.http.get(url)
      .map((resp: any) => {
        this.router.navigate(['/login']);
      });*/
  }

  loginGoogle(token: string) {
    let url = URL_SERVICIOS + '/login/google';
    return this.http.post(url, {token: token})
    .map((resp: any) => {
      this.guardarStorage(resp.token, resp.imagenUsuario, resp.estudianteBD);
        return true;
    });


  }
}
