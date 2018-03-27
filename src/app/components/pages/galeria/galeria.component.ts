import { Component, OnInit } from '@angular/core';
import { AlojamientosService } from '../../../services/service.index';
import { AlojamientoConsulta } from '../../../models/alojamientoConsulta.model';
import { Alojamiento } from '../../../models/alojamiento.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {
  alojamientos: AlojamientoConsulta [] = [];
  id: string;

  sede: string = '';
  hospedanA: string = '';
  tipoAlojamiento: string = '';
  habitacion: string = '';

  constructor(private servicioAlojamientos: AlojamientosService,
              public router: Router) {}

  ngOnInit() {
    this.cargarAlojamientos();
  }

  cargarAlojamientos() {
    this.servicioAlojamientos.cargarAlojamientos()
              .subscribe((res: any ) => {
                this.alojamientos = res.alojamientosGaleria;
              });
  }

  buscarAlojamiento( alojamiento ) {
    this.router.navigate(['/alojamientoEstudiante', alojamiento._id, alojamiento.estudiante.email.split('@', 1).toString()]);
  }

  onChangeSede($event, sedesValue) {
    this.sede = sedesValue;
    if (this.sede.length > 0  && this.hospedanA.length > 0 && this.tipoAlojamiento.length > 0 && this.habitacion.length > 0) {
      this.servicioAlojamientos.buscarPorFiltro(this.sede, this.hospedanA, this.tipoAlojamiento, this.habitacion)
        .subscribe((resp: any) => {
          console.log(resp);
           this.alojamientos = resp.alojamientos;
        });
     } else {
      swal('Atención', 'No hay alojamientos registrados con esas características recuerda haber seleccionado  todos los filtros', 'error');
      this.cargarAlojamientos();
     }
  }

  onChangeHospedanA($event, hospedanAValue) {
    this.hospedanA = hospedanAValue;
    if (this.sede.length > 0 && this.hospedanA.length > 0 && this.tipoAlojamiento.length > 0 && this.habitacion.length > 0) {
      this.servicioAlojamientos.buscarPorFiltro(this.sede, this.hospedanA, this.tipoAlojamiento, this.habitacion)
        .subscribe((resp: any) => {
          this.alojamientos = resp.alojamientos;
        });
    } else {
      swal('Atención', 'No hay alojamientos registrados con esas características recuerda haber seleccionado  todos los filtros', 'error');
      this.cargarAlojamientos();
    }
  }

  onChangeTipoAlojamiento($event, tipoAlojamientoValue) {
    this.tipoAlojamiento = tipoAlojamientoValue;
    if (this.sede.length > 0 && this.hospedanA.length > 0 && this.tipoAlojamiento.length > 0 && this.habitacion.length > 0) {
      this.servicioAlojamientos.buscarPorFiltro(this.sede, this.hospedanA, this.tipoAlojamiento, this.habitacion)
        .subscribe((resp: any) => {
           this.alojamientos = resp.alojamientos;
        });
    } else {
      swal('Atención', 'No hay alojamientos registrados con esas características recuerda haber seleccionado  todos los filtros', 'error');
      this.cargarAlojamientos();
    }
  }

  onChangeTipoHabitacion($event, tipoHabitacionValue) {
    console.log($event, tipoHabitacionValue);
    this.habitacion = tipoHabitacionValue;
    if (this.sede.length > 0 && this.hospedanA.length > 0 && this.tipoAlojamiento.length > 0 && this.habitacion.length > 0) {
      this.servicioAlojamientos.buscarPorFiltro(this.sede, this.hospedanA, this.tipoAlojamiento, this.habitacion)
        .subscribe((resp: any) => {
           this.alojamientos = resp.alojamientos;
        });
    } else {
      swal('Atención', 'No hay alojamientos registrados con esas características recuerda haber seleccionado  todos los filtros', 'error');
      this.cargarAlojamientos();
    }
  }

}

