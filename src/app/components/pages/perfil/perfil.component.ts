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
  fechaNacimiento: string;

  constructor(public _condorService: CondorService,
    public router: Router,
    public route: ActivatedRoute,
    public _estudianteService: EstudianteService) {}


    ngOnInit() {
      this.usuario = this._estudianteService.obtenerStorage();
      this.route.params
        .subscribe(parametros => {
          this.id = parametros['id'],
            this._condorService.obtenerUsuarioCondor(this.id)
              .subscribe(res => {
                this.usuarioCondor = res.json();
              }, error => console.log(error));
        });
   }

}
