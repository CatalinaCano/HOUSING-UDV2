import { Component, OnInit, Injectable } from '@angular/core';
import { NavbarService, EstudianteService} from '../../../services/service.index';
import { Estudiante } from '../../../models/estudiante.model';




@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  usuario: Estudiante;


  constructor( public _navbar: NavbarService,
               public _estudianteService: EstudianteService
              ) { }

  ngOnInit() {
    this.usuario = this._navbar.usuario;
  }



}
