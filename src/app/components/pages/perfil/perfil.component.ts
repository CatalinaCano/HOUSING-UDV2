import { Component, OnInit } from '@angular/core';
import { EstudianteService, CondorService } from '../../../services/service.index';
import { Estudiante } from '../../../models/estudiante.model';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html'
})
export class PerfilComponent implements OnInit {

  usuario: Estudiante;
  usuarioCondor: any;
  id: string;

  constructor(public _condorService: CondorService,
    public router: Router,
    public route: ActivatedRoute,
    public _estudianteService: EstudianteService) {
    this.route.params
      .subscribe(parametros => {
        this.id = parametros['id'],
          this._condorService.obtenerUsuarioCondor(this.id)
            .subscribe(usuarioCondor => this.usuarioCondor = usuarioCondor);
      });
  }
  ngOnInit() {
    this.usuario = this._estudianteService.obtenerStorage();
  }

}
