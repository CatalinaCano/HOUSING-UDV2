import { Component, OnInit, Injectable } from '@angular/core';
import { NavbarService, EstudianteService} from '../../../services/service.index';
import { Estudiante } from '../../../models/estudiante.model';


declare const gapi: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  usuario: Estudiante;
  auth2: any;

  constructor( public _navbar: NavbarService,
               public _estudianteService: EstudianteService
              ) { }

  ngOnInit() {
    this.usuario = this._navbar.usuario;
  }

 signOut() {
   this.auth2 = gapi.auth2.getAuthInstance();
   this.auth2.signOut().then(function () {
    console.log('User signed out.');
    window.location.href = 'https://mail.google.com/mail/u/0/?logout&hl=en';
  });
}

}
