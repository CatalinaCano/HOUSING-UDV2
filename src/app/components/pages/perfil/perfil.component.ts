import { Component, OnInit } from '@angular/core';
import { EstudianteService } from '../../../services/service.index';
import { Estudiante } from '../../../models/estudiante.model';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html'
})
export class PerfilComponent implements OnInit {

  usuario: Estudiante;

  constructor(public _estudianteService: EstudianteService) { }

  ngOnInit() {
    this.usuario = this._estudianteService.obtenerStorage();
  }

}
