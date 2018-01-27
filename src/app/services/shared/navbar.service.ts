import { Injectable } from '@angular/core';

@Injectable()
export class NavbarService {

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
        titulo: 'Información',
        icono: 'fa fa-gavel',
        url: '#',
        submenu: [
          {
            titulo: 'Políticas',
            icono: 'fa fa-commenting',
            url: '/informacion'
          },
          {
            titulo: 'Acta de Entendimiento',
            icono: 'fa fa-file-pdf-o',
            url: ''
          },
        ]
      },
      {
        titulo: 'Gestión Housing',
        icono: 'fa fa-cogs',
        url: '/administrador'
      },
    ];

  constructor() { }

}
