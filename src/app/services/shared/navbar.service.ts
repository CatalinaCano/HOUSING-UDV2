import { Injectable } from '@angular/core';
import { EstudianteService } from '../estudiante.service';
import { Estudiante } from '../../models/estudiante.model';

@Injectable()
export class NavbarService {

    usuario: Estudiante;

  constructor( public _estudianteService: EstudianteService) {
    this.usuario = _estudianteService.obtenerStorage();
}
  menu: any = [
    {
      titulo: 'Inicio',
      icono: 'fa fa-home',
      url: '/inicio',
      id: {}
    },
    {
      titulo: 'Perfil',
      icono: 'fa fa-user',
      url: '/perfil',
      id: this._estudianteService.obtenerMatchID()
    },
    {
      titulo: 'Registrar Alojamiento',
      icono: 'fa fa-address-card',
      url: '/alojamiento',
      id: this._estudianteService.obtenerStorage()._id
    },
    {
      titulo: 'Galeria de Alojamientos',
      icono: 'fa fa-search',
      url: '/galeria',
      id: {}
    },
    {
      titulo: 'Políticas',
      icono: 'fa fa-commenting',
      url: '/informacion',
      id: {}
    },
    {
      titulo: 'Gestión Housing',
      icono: 'fa fa-cogs',
      url: '/administrador',
      id: {}
    },
    {
      titulo: 'Estudiantes',
      icono: 'fa fa-users',
      url: '/estudiantes',
      id: {}
    },
  ];
}
