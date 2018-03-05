import { Component, OnInit } from '@angular/core';
import { EstadisticasService } from '../../../services/estadisticas.service';
import { Alojamiento } from '../../../models/alojamiento.model';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {

  alojamientos: Alojamiento[] = [];
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
  }

  cargarAlojamientos() {
    this.cargando = true;
    this._estadisticas.cargarAlojamientos(this.desde)
      .subscribe((res: any) => {
        console.log(res);
        this.totalRegistros = res.total;
        this.alojamientos = res.totalAlojamientos;
        this.cargando = false;
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
