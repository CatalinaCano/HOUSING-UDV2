import { Component, OnInit, Injectable } from '@angular/core';
import { NavbarService } from '../../../services/service.index';
import { Estudiante } from '../../../models/estudiante.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  usuario: Estudiante;

  constructor( public _navbar: NavbarService ) { }

  ngOnInit() {
    this.usuario = this._navbar.usuario;
  }

}
