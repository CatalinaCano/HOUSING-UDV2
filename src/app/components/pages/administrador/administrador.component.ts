import { Component, OnInit } from '@angular/core';
import { AlojamientoConsulta } from '../../../models/alojamientoConsulta.model';
import { Router } from '@angular/router';
import { AlojamientosService, EnviarCorreoService, EstadisticasService } from '../../../services/service.index';

declare var swal: any;

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {
  alojamientos: AlojamientoConsulta[] = [];
  totalAlojamientos: number;
  totalAlojamientosDisponibles: number;
  totalAlojamientosAprobados: number;
  totalAlojamientosPorAprobar: number;
  desde: number = 0;
  totalRegistros: number = 0;
  cargando: boolean = true;

  constructor(
    public _estadisticas: EstadisticasService,
    public router: Router,
    public _alojamientoService: AlojamientosService,
    public _correoService: EnviarCorreoService
  ) { }

  ngOnInit() {
    this.cargarAlojamientos();
    this.cargarEstadisticas();
  }

  cargarAlojamientos() {
    this.cargando = true;
    this._estadisticas.cargarAlojamientos(this.desde)
      .subscribe((res: any) => {
        console.log(res);
        this.alojamientos = res.totalAlojamientos;
        this.cargando = false;
      });
  }

  cargarEstadisticas() {
    this._estadisticas.estadisticas()
        .subscribe((res: any) => {
          this.totalAlojamientos = res.cantidadAlojamientos;
          this.totalAlojamientosDisponibles = res.alojamientosDisponibles;
          this.totalAlojamientosAprobados = res.alojamientosAceptados;
          this.totalAlojamientosPorAprobar = res.alojamientosPorAprobar;
        });
  }

  cambiarDesde(valor: number) {
    let desde = this.desde + valor;
    if (desde >= this.totalRegistros) {
      return;
    }
    if (desde < 0) {
      return;
    }
    this.desde += valor;
    this.cargarAlojamientos();

  }

  buscarAlojamiento(alojamiento) {
    this.router.navigate(['/alojamientoEstudiante', alojamiento._id, alojamiento.estudiante.email.split('@', 1).toString()]);
  }

  borrarAlojamiento(alojamiento) {
    swal({
      title: '¿Estas Seguro?',
      text: 'Esta a punto de borrar el alojamiento de ' + alojamiento.estudiante.email,
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si',
      cancelButtonText: 'No'
    }).then(borrar => {
      if (borrar) {
        this._alojamientoService.borrarAlojamiento(alojamiento._id, alojamiento.estudiante.email)
          .subscribe(borrado => {
            this.cargarAlojamientos();
            this.cargarEstadisticas();
          });
      }
    });

  }

  actualizarEstadoAlojamiento(alojamiento) {
    swal({
      title: '¿Estas Seguro?',
      text: 'Esta a punto de actualizar el estado del alojamiento de ' + alojamiento.estudiante.email,
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si',
      cancelButtonText: 'No'
    }).then(actualizar => {
      if (actualizar) {
        this._alojamientoService.actualizarEstadoAlojamiento(alojamiento)
          .subscribe(actualizado => {
            this._correoService.enviarCorreoEstadoAlojamiento(alojamiento).subscribe(res => {
              this.cargarAlojamientos();
              this.cargarEstadisticas();
            });
          });
        this.router.navigate(['/administrador']);
      }
    });

  }


  buscar(termino: string) {
    console.log('buscando con.. ' + termino);
    if (termino.length <= 0) {
      this.cargarAlojamientos();
      return;
    }
    this._alojamientoService.buscar(termino)
      .subscribe((resp: any) => {
        console.log(resp);
        this.alojamientos = resp.alojamientos;
      });
  }

  onChangeSede($event, sedesValue) {
    this._alojamientoService.buscarPorSede(sedesValue)
        .subscribe((resp: any) => {
          this.alojamientos = resp.sedesAlojamientos;
        });
    }

  onChangeHospedanA($event, hospedanAValue) {
    this._alojamientoService.buscarPorHospedanA(hospedanAValue)
      .subscribe((resp: any) => {
        this.alojamientos = resp.tipoPersonas;
      });
  }

  onChangeEstadoAlojamiento($event, estadoAlojamientoValue) {
    console.log(estadoAlojamientoValue);
    this._alojamientoService.buscarPorEstadoAlojamiento(estadoAlojamientoValue)
      .subscribe((resp: any) => {
        this.alojamientos = resp.estadoAlojamiento;
      });
  }

  onChangeEstadoPublicacionAlojamiento($event, estadoPublicacionAlojamientoValue) {
    console.log(estadoPublicacionAlojamientoValue);
    this._alojamientoService.buscarPorEstadoPublicacionAlojamiento(estadoPublicacionAlojamientoValue)
      .subscribe((resp: any) => {
        this.alojamientos = resp.estadoPublicacionAlojamiento;
      });
  }
}
