import { Component, OnInit } from '@angular/core';
import { EstudianteService, CondorService } from '../../../services/service.index';
import { Estudiante } from '../../../models/estudiante.model';



@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html'
})
export class PerfilComponent implements OnInit {

  usuario: Estudiante;
  usuarioCondor: any;

  constructor(public _estudianteService: EstudianteService,
              public _condorService: CondorService) { }

  ngOnInit() {
    this.usuario = this._estudianteService.obtenerStorage();
  }

}
