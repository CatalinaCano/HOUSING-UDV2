import { Component, OnInit } from '@angular/core';
import { CondorService } from '../../../services/service.index';
import { HttpModule } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-informacion-perfil',
  templateUrl: './informacion-perfil.component.html'
})


export class InformacionPerfilComponent implements OnInit {
  usuarioCondor: any;
  id: string;

  constructor(public _condorService: CondorService,
              public router: Router,
              public route: ActivatedRoute) {
      this.route.params
                .subscribe(parametros => {
                    this.id = parametros['id'],
                  this._condorService.obtenerUsuarioCondor( this.id )
                      .subscribe(usuarioCondor => this.usuarioCondor = usuarioCondor);
                });
  }


  ngOnInit() {
  }

  CalcularEdad(): number {
    if (this.usuarioCondor.fechaNacimiento) {
      let hoy = new Date();
      let cumpleanos = new Date(this.usuarioCondor.fechaNacimiento);
      let edad = hoy.getFullYear() - cumpleanos.getFullYear();
      return edad;
    } else {
      return null;
    }
  }
}
