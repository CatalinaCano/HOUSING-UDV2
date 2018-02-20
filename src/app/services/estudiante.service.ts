import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../config/config';
import { Estudiante } from '../models/estudiante.model';

@Injectable()
export class EstudianteService {
    estudiante: Estudiante;
    token: string;


  constructor(
    public http: HttpClient
  ) { }

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

  loginGoogle() { // Pilas aqui debe ir el token
    let url = URL_SERVICIOS + '/login/google';
    return this.http.post(url, {}) // return this.http.post(url,{token:token})
    .map((resp: any) => {
        this.guardarStorage(resp.token, resp.estudianteBD);
        return true;

    });


  }
}
