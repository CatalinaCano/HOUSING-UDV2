import { Component, OnInit } from '@angular/core';
import { Estudiante } from '../../../models/estudiante.model';
import { EstudiantesHousingService } from '../../../services/service.index';

@Component({
  selector: 'estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit {

  estudiantes: Estudiante [] = [];
  desde: number = 0;

  totalRegistros: number = 0;
  cargando: boolean = true;

  constructor(public _estudiantesHousing: EstudiantesHousingService) { }

  ngOnInit() {
    this.cargarEstudiantes();
  }

  cargarEstudiantes() {
    this.cargando = true;
    this._estudiantesHousing.cargarUsuarios(this.desde)
          .subscribe( (res: any) => {
              console.log(res);
              this.totalRegistros = res.total;
              this.estudiantes = res.estudiantes;
              this.cargando = false;
          });
  }

  cambiarDesde (valor: number) {
    let desde = this.desde + valor;

    if ( desde >= this.totalRegistros) {
        return;
    }
    if (desde < 0) {
      return;
    }

    this.desde   += valor;
    this.cargarEstudiantes();

  }

  buscarEstudiante( termino: string) {
    this._estudiantesHousing.buscarEstudiante(termino)
      .subscribe((estudiantes: Estudiante[]) => {
          this.estudiantes = estudiantes;
      });
  }

}
