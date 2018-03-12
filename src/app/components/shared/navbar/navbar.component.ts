import { Component, OnInit, Injectable } from '@angular/core';
import { NavbarService, EstudianteService} from '../../../services/service.index';
import { Estudiante } from '../../../models/estudiante.model';
import { Router } from '@angular/router';




@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  usuario: Estudiante;


  constructor( public _navbar: NavbarService,
               public _estudianteService: EstudianteService,
              public router: Router
              ) { }

  ngOnInit() {
    this.usuario = this._navbar.usuario;
  }

  buscar(termino: string) {
    this.router.navigate(['/busqueda', termino]);

  }


}
