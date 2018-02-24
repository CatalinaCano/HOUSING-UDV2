import { Component, OnInit } from '@angular/core';
import { EstudianteService } from '../../../services/service.index';
import { Estudiante } from '../../../models/estudiante.model';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  usuario: Estudiante;
  nombres: string;
  constructor( private _estudianteService: EstudianteService ) {}

  ngOnInit() {
    this.usuario = this._estudianteService.obtenerStorage();
    this.nombres = this._estudianteService.obtenerNombres();
  }
}
