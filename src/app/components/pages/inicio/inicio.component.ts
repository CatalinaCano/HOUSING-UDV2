import { Component, OnInit } from '@angular/core';
import { EstudianteService } from '../../../services/service.index';
import { Estudiante } from '../../../models/estudiante.model';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  nombres: string;
  id: string;
  constructor( private _estudianteService: EstudianteService ) {}

  ngOnInit() {
    this.nombres = this._estudianteService.obtenerNombres();
    this.id = this._estudianteService.obtenerMatchID()
  }
}
