import { Component, OnInit } from '@angular/core';
import { Marker } from '../../../interfaces/marker.interface';
import { EstudianteService } from '../../../services/service.index';

@Component({
  selector: 'app-alojamiento',
  templateUrl: './alojamiento.component.html'
})
export class AlojamientoComponent implements OnInit {

  // Variables para el mapa
  lat: number = 4.627837801285463;
  lng: number = -74.15065860000004;
  zoom: number = 18;

  // marcadores
  markers: Marker[] = [
    {
      nombre: 'Facultad Ingeniería',
      lat: 4.6281962,
      lng: -74.06568909999999,
      arrastrable: true
    },
    {
      nombre: 'Facultad Ingeniería',
      lat: 4.6281962,
      lng: -74.06568909999999,
      arrastrable: true
    }
  ];


  constructor(public _estudianteService: EstudianteService) { }

  ngOnInit() {
  }

}
