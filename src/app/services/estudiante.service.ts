import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../config/config';
import { Estudiante } from '../models/estudiante.model';
import { Router } from '@angular/router';

@Injectable()
export class EstudianteService {
    estudiante: Estudiante;
    token: string;


  constructor(
    public http: HttpClient,
    public router: Router
  ) {
    this.cargarStorage();
    }


estaLogueado() {
  console.log('esta logueado ' + this.token.length );
  if (this.token.length > 5) {
    return true;
  } else {
    return false;
  }

}

cargarStorage() {
  if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
    this.estudiante = JSON.parse(localStorage.getItem('estudiante'));
  } else {
    this.token = '';
    this.estudiante = null;
  }
}


  guardarStorage(token: string, estudianteBD: Estudiante) {
    localStorage.setItem('token', token);
    localStorage.setItem('estudianteBD', JSON.stringify(estudianteBD));
    this.estudiante = estudianteBD;
    this.token = token;


  }

  obtenerStorage() {
    let token = localStorage.getItem('token');
    let usuario = JSON.parse( localStorage.getItem('estudianteBD'));
    return usuario;
  }


  logout() {
    this.estudiante = null;
    this.token = '';
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  loginGoogle(token: string) { // Pilas aqui debe ir el token
    let url = URL_SERVICIOS + '/login/google';
    return this.http.post(url, {token: token}) // return this.http.post(url,{token:token})
    .map((resp: any) => {
        this.guardarStorage(resp.token, resp.estudianteBD);
        return true;

    });


  }
}
