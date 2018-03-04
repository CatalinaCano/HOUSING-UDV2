import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { URL_SERVICIOS } from '../../../config/config';
import { RegistrarAlojamientoService } from '../../../services/registrar-alojamiento.service';
import { SubirArchivoService } from '../../../services/subir-archivo.service';


@Component({
  selector: 'imagenes',
  templateUrl: './imagenes.component.html',
})
export class ImagenesComponent implements OnInit {
  public idAlojamiento: string;
  public imgSala: File;
  public imgBanio: File;
  public imgCocina: File;
  public imgHabitacion: File;
  public imgFachada: File;

  constructor(
    public router: Router,
    public route: ActivatedRoute,
    // public _registrarAlojamientoService: RegistrarAlojamientoService,
    public _subirArchivos: SubirArchivoService
  ) { }

  ngOnInit() {
    this.route.params
      .subscribe(parametros => {
        this.idAlojamiento = parametros['id'];
        console.log('parametros del imagenes component' + this.idAlojamiento);
      });
  }



  seleccionImagenHabitacion(archivo: File) {
    console.log('tipo inicial ' + typeof (this.imgHabitacion));
    if (!archivo) {
      this.imgHabitacion = null;
      return;
    }
    this.imgHabitacion = archivo;
    console.log(this.imgHabitacion);
    console.log(typeof (this.imgHabitacion));
  }

  seleccionImagenBanio(archivo: File) {
    if (!archivo) {
      this.imgBanio = null;
      return;
    }
    this.imgBanio = archivo;
  }

  seleccionImagenCocina(archivo: File) {
    if (!archivo) {
      this.imgCocina = null;
      return;
    }
    this.imgCocina = archivo;
  }

  seleccionImagenFachada(archivo: File) {
    if (!archivo) {
      this.imgFachada = null;
      return;
    }
    this.imgFachada = archivo;
  }

  seleccionImagenSala(archivo: File) {
    if (!archivo) {
      this.imgSala = null;
      return;
    }
    this.imgSala = archivo;
    console.log(this.imgSala);
  }


  cambiarImagen() {
  console.log('llego a cambiar imagen');
  console.log('sala es' + this.imgSala);
  console.log('ID ES' + this.idAlojamiento);

  this._subirArchivos.subirArchivo(this.imgSala, this.imgHabitacion, this.imgFachada, this.imgCocina, this.imgBanio, this.idAlojamiento)
    .then( resp => {
        console.log(resp);
    })
    .catch( resp => {
      console.log(resp);
    });
  }

}
