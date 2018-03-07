import { Component, OnInit } from '@angular/core';
import { Marker } from '../../../interfaces/marker.interface';
import { EstudianteService, AlojamientosService } from '../../../services/service.index';
import { AlojamientoConsulta } from '../../../models/alojamientoConsulta.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-alojamiento',
  templateUrl: './alojamiento.component.html'
})
export class AlojamientoComponent implements OnInit {

  // Variables para el mapa
  lat: number; // = 4.627837801285463;
  lng: number;  // = -74.15065860000004;
  zoom: number = 18;
  id: string;


alojamiento: any;

  constructor(  public _estudianteService: EstudianteService,
                public router: Router,
                public route: ActivatedRoute,
                public _alojamientoService: AlojamientosService) { }

  ngOnInit() {
    this.cargarAlojamiento();
    this.lat = this.alojamiento.ubicacion.latitud;
    this.lng = this.alojamiento.ubicacion.longitud;
  }

  cargarAlojamiento() {
    this.route.params
      .subscribe(parametros => {
        this.id = parametros['id'],
          this._alojamientoService.buscarAlojamiento(this.id)
            .subscribe(res => {
              this.alojamiento = JSON.parse(JSON.stringify(res)).alojamientoBD;
              console.log(JSON.parse(JSON.stringify(res)).alojamientoBD);
            }, error => console.log(error));
      });
  }

}
