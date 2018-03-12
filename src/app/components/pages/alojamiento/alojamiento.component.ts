import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';
import { Marker } from '../../../interfaces/marker.interface';
import { EstudianteService, AlojamientosService, CondorService} from '../../../services/service.index';
import { AlojamientoConsulta } from '../../../models/alojamientoConsulta.model';
import { Router, ActivatedRoute } from '@angular/router';
import { } from 'googlemaps';
import { Estudiante } from '../../../models/estudiante.model';
declare var swal: any;

@Component({
  selector: 'app-alojamiento',
  templateUrl: './alojamiento.component.html'
})
export class AlojamientoComponent implements OnInit {

  // Variables para el mapa
  lat: number;
  lng: number;
  zoom: number = 18;
  idAlojamiento: string;
  usuarioCondor: any;
  idEstudiante: string;
  alojamiento: any;
  role: string;
  administrador: boolean = false;
  usuario: Estudiante;



  constructor(  public _estudianteService: EstudianteService,
                public router: Router,
                public route: ActivatedRoute,
                public _alojamientoService: AlojamientosService,
                public _condorService: CondorService
                ) {

                 }

  ngOnInit() {
    this.usuario = this._estudianteService.obtenerStorage();
    this.cargarAlojamiento();
    this.buscarEstudiante();
    this.lat = this.alojamiento.ubicacion.latitud;
    this.lng = this.alojamiento.ubicacion.longitud;
  }



  cargarAlojamiento() {
    this.route.params
      .subscribe(parametros => {
        this.idAlojamiento = parametros['idAlojamiento'],
          this._alojamientoService.buscarAlojamiento(this.idAlojamiento)
            .subscribe(res => {
              this.alojamiento = JSON.parse(JSON.stringify(res)).alojamientoBD;
            }, error => console.log(error));
      });
  }

  buscarEstudiante() {
    this.route.params
      .subscribe(parametros => {
        this.idEstudiante = parametros['idEstudiante'],
          this._condorService.obtenerUsuarioCondor(this.idEstudiante)
            .subscribe(res => {
              this.usuarioCondor = res.json();
              console.log(res.json());
            }, error => console.log(error));
      });
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
        this._alojamientoService.borrarAlojamiento(alojamiento._id)
          .subscribe(borrado => {
            console.log(borrado);
          // devolver a la pagina anterior  this.cargarAlojamientos();
          });
      }
    });

  }

  cambiarEstadoAprobado(alojamiento) {
    alojamiento.propiedadesAlojamiento.estadoPublicacionAlojamiento = 'Aceptado';
    swal({
      title: '¿Estas Seguro?',
      text: 'Esta a punto de actualizar el estado del alojamiento de ' + alojamiento.estudiante.email,
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si',
      cancelButtonText: 'No'
    }).then(borrar => {
      if (borrar) {
        this._alojamientoService.actualizarEstadoAlojamiento(alojamiento)
          .subscribe(actualizado => {
            this.router.navigate(['/administrador']);
            // devolver a la pagina anterior  this.cargarAlojamientos();
          });
      }
    });

  }

  cambiarEstadoRechazado(alojamiento) {
    alojamiento.propiedadesAlojamiento.estadoPublicacionAlojamiento = 'Rechazado';
    swal({
      title: '¿Estas Seguro?',
      text: 'Esta a punto de actualizar el estado del alojamiento de ' + alojamiento.estudiante.email,
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si',
      cancelButtonText: 'No'
    }).then(borrar => {
      if (borrar) {
        this._alojamientoService.actualizarEstadoAlojamiento(alojamiento)
          .subscribe(actualizado => {
            this.router.navigate(['/administrador']);
            // devolver a la pagina anterior  this.cargarAlojamientos();
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
    }).then(borrar => {
      if (borrar) {
        this._alojamientoService.actualizarEstadoAlojamiento(alojamiento)
          .subscribe(actualizado => {
            this.router.navigate(['/administrador']);
            // devolver a la pagina anterior  this.cargarAlojamientos();
          });
      }
    });

  }

}
