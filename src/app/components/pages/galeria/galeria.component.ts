import { Component, OnInit } from '@angular/core';
import { AlojamientosService } from '../../../services/service.index';
import { AlojamientoConsulta } from '../../../models/alojamientoConsulta.model';
import { Alojamiento } from '../../../models/alojamiento.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html'
})
export class GaleriaComponent implements OnInit {
  alojamientos: AlojamientoConsulta [] = [];
  id: string;
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
    this.router.navigate(['/alojamientoEstudiante', alojamiento._id]);
  }

}

