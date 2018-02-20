import { Injectable } from '@angular/core';
import { EstudianteService } from '../estudiante.service';
import { Estudiante } from '../../models/estudiante.model';

@Injectable()
export class NavbarService {

    usuario: Estudiante;

    menu: any = [
      {
        titulo: 'Inicio',
        icono: 'fa fa-home',
        url: '/inicio'
      },
      {
        titulo: 'Perfil',
        icono: 'fa fa-user',
        url: '/perfil'
      },
      {
        titulo: 'Registrar Alojamiento',
        icono: 'fa fa-address-card',
        url: '/registrar'
      },
      {
        titulo: 'Galeria de Alojamientos',
        icono: 'fa fa-search',
        url: '/galeria'
      },
      {
        titulo: 'Políticas',
        icono: 'fa fa-commenting',
        url: '/informacion'
      },
      {
        titulo: 'Gestión Housing',
        icono: 'fa fa-cogs',
        url: '/administrador'
      },
    ];

  constructor( public _estudianteService: EstudianteService) {
    this.usuario = _estudianteService.obtenerStorage();
    console.log(this.usuario);
   }

}
