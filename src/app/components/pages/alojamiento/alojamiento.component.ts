import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';
import { EstudianteService, AlojamientosService, CondorService} from '../../../services/service.index';
import { AlojamientoConsulta } from '../../../models/alojamientoConsulta.model';
import { Router, ActivatedRoute } from '@angular/router';
import { } from 'googlemaps';
import { Estudiante } from '../../../models/estudiante.model';
import { EnviarCorreoService } from '../../../services/enviar-correo.service';
import { Correo } from '../../../models/correo.model';
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
                public _condorService: CondorService,
                public _enviarCorreo: EnviarCorreoService
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
             this.router.navigate(['/administrador']);
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
            this.enviarCorreoAceptado();
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
            this.enviarCorreoRechazado();
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
            this.enviarCorreoAceptado();
          });
      }
    });

  }

enviarCorreoAceptado() {
    swal({
      text: 'Enviar observaciones',
      content: 'input',
      button: {
        text: 'Enviar',
        closeModal: false,
      },
    }).then(observaciones => {
      if (observaciones) {
        console.log(this.usuarioCondor.informacion.correo, observaciones);
        let correo = new Correo(this.usuarioCondor.informacion.correo, observaciones);
        this._enviarCorreo.enviarCorreoAceptado(correo)
          .subscribe(res => {
            swal.stopLoading();
            swal.close();
            this.router.navigate(['/administrador']);
          });
      }
    });
  }


enviarCorreoRechazado() {
  swal({
    text: 'Enviar observaciones',
    content: 'input',
    button: {
      text: 'Enviar',
      closeModal: false,
    },
  }).then(observaciones => {
    if (observaciones) {
      console.log(this.usuarioCondor.informacion.correo, observaciones);
      let correo = new Correo(this.usuarioCondor.informacion.correo, observaciones);
      this._enviarCorreo.enviarCorreoRechazado(correo)
        .subscribe(res => {
          swal.stopLoading();
          swal.close();
          this.router.navigate(['/administrador']);
        });
    }
  });
}
}
