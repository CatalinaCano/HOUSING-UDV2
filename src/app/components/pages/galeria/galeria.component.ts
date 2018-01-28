import { Component, OnInit } from '@angular/core';
import { AlojamientosService } from '../../../services/service.index';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html'
})
export class GaleriaComponent implements OnInit {
  alojamientos: any[] = [];
  constructor(private servicioAlojamientos: AlojamientosService) {}

  ngOnInit() {
    this.alojamientos = this.servicioAlojamientos.getAlojamientos();
  }
}
