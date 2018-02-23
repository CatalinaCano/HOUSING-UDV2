import { Component, OnInit } from '@angular/core';
import { CondorService } from '../../../services/service.index';
import { HttpModule } from '@angular/http';

@Component({
  selector: 'app-informacion-perfil',
  templateUrl: './informacion-perfil.component.html'
})


export class InformacionPerfilComponent implements OnInit {
  usuarioCondor: any;
  id = 'dccanon@correo.udistrital.edu.co';
  constructor(public _condorService: CondorService) {
  }


  ngOnInit() {
     this.usuarioCondor = this._condorService.obtenerUsuarioCondor(this.id);
  }

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
