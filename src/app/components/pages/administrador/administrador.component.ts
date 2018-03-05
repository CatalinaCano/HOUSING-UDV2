import { Component, OnInit } from '@angular/core';
import { EstadisticasService } from '../../../services/estadisticas.service';
import { AlojamientoConsulta } from '../../../models/alojamientoConsulta.model';

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
    public _estadisticas: EstadisticasService
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

}
