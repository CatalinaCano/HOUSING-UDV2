import { Component, OnInit } from '@angular/core';
import { Estudiante } from '../../../models/estudiante.model';
import { EstudiantesHousingService } from '../../../services/service.index';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

declare var swal: any;

@Component({
  selector: 'estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit {

  estudiantes:  Estudiante [] = [];
  estudianteNuevo: Estudiante;
  desde: number = 0;
  role: string = 'ESTUDIANTE';
  totalRegistros: number = 0;
  cargando: boolean = true;
  forma: FormGroup;
  oculto: string = ' ';

  constructor( public _estudiantesHousing: EstudiantesHousingService,
               public router: Router) { }

  ngOnInit() {
    this.cargarEstudiantes();
    this.forma = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.email, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$') ]),
      'perteneceA': new FormControl('', Validators.required),
      'role': new FormControl('', Validators.required),
      'sobreMi': new FormControl('', [Validators.required, Validators.minLength(10)])
    });
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
    console.log('buscando con.. ' + termino);
    if (termino.length <= 0 ) {
      this.cargarEstudiantes();
      return;
    }

    this._estudiantesHousing.buscarEstudiante(termino)
      .subscribe((resp: any) => {
        console.log(resp);
          this.estudiantes = resp.estudiantes;
      });
  }

  borrarEstudiante(estudiante) {
      swal({
        title: '¿Estas Seguro?',
        text: 'Esta a punto de borrar a ' + estudiante.email,
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si',
        cancelButtonText: 'No'
      }).then(borrar => {
          if (borrar) {
            this._estudiantesHousing.borrarEstudiante(estudiante._id)
                .subscribe(borrado => {
                  console.log(borrado);
                  this.cargarEstudiantes();
                });
          }
      });
  }

  guardarCambios() {
    if (this.forma.invalid) {
      return;
    }
    let estudiante = new Estudiante(
      this.forma.value.email,
      this.forma.value.sobreMi,
      this.forma.value.perteneceA,
      this.forma.value.role
    );

    this._estudiantesHousing.crearEstudiante(estudiante)
      .subscribe(resp => {
        console.log(resp);
        swal('Éxito', 'Estudiante creado con Éxito', 'success');
        this.cargarEstudiantes();
      });
    this.forma.reset();
  }

  limpiar() {
    this.forma.reset();
  }


}
