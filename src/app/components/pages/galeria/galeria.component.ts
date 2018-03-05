import { Component, OnInit } from '@angular/core';
import { AlojamientosService } from '../../../services/service.index';
import { AlojamientoConsulta } from '../../../models/alojamientoConsulta.model';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html'
})
export class GaleriaComponent implements OnInit {
  alojamientos: AlojamientoConsulta [] = [];
  constructor(private servicioAlojamientos: AlojamientosService) {}

  ngOnInit() {
    this.cargarAlojamientos();
  }

  cargarAlojamientos() {
    console.log('llego');
    this.servicioAlojamientos.cargarAlojamientos()
              .subscribe((res: any ) => {
                this.alojamientos = res.alojamientosGaleria;
              });
  }

}

