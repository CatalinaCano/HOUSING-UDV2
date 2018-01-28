import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-informacion-perfil',
  templateUrl: './informacion-perfil.component.html'
})
export class InformacionPerfilComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  CalcularEdad(): number {
    return 0;
    /*if (this.usuario.fechaNacimiento) {
      let hoy = new Date();
      let cumpleanos = new Date(this.usuario.fechaNacimiento);
      let edad = hoy.getFullYear() - cumpleanos.getFullYear();
      return edad;
    } else {
      return null;
    }*/
  }
}
