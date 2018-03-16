import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { URL_SERVICIOS } from '../../../config/config';
import { RegistrarAlojamientoService } from '../../../services/registrar-alojamiento.service';
import { SubirArchivoService } from '../../../services/subir-archivo.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';



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
  forma: FormGroup;

  public imgHabitacionTemp: string;
  public imgSalaTemp: string;
  public imgCocinaTemp: string;
  public imgBanioTemp: string;
  public imgFachadaTemp: string;

  constructor(
    public router: Router,
    public route: ActivatedRoute,
    public _subirArchivos: SubirArchivoService
  ) { }

  ngOnInit() {
    this.route.params
      .subscribe(parametros => {
        this.idAlojamiento = parametros['id'];
        console.log('parametros del imagenes component' + this.idAlojamiento);
      });
    this.forma = new FormGroup({
      'imgHabitacion': new FormControl('', Validators.required),
      'imgFachada': new FormControl('', Validators.required),
      'imgSala': new FormControl('', Validators.required),
      'imgCocina': new FormControl('', Validators.required),
      'imgBanio': new FormControl('', Validators.required)
    });
  }



  seleccionImagenHabitacion(archivo: File) {
    if (!archivo) {
      this.imgHabitacion = null;
      return;
    }

    if (archivo.type.indexOf('image') < 0) {
        swal('Sólo imágenes', 'El archivo seleccionado para la habitación no es una imagen', 'error');
      this.imgHabitacion = null;
      return;
    }


    this.imgHabitacion = archivo;

    let reader = new FileReader();
    let urlImgHabitacionTemp = reader.readAsDataURL(archivo);

    reader.onloadend = () => this.imgHabitacionTemp = reader.result;
  }




  seleccionImagenBanio(archivo: File) {
    if (!archivo) {
      this.imgBanio = null;
      return;
    }

    if (archivo.type.indexOf('image') < 0) {
      swal('Sólo imágenes', 'El archivo seleccionado para el baño no es una imagen', 'error');
      this.imgBanio = null;
      return;
    }

    this.imgBanio = archivo;

    let reader = new FileReader();
    let urlImgBanioTemp = reader.readAsDataURL(archivo);

    reader.onloadend = () => this.imgBanioTemp = reader.result;
  }





  seleccionImagenCocina(archivo: File) {
    if (!archivo) {
      this.imgCocina = null;
      return;
    }

    if (archivo.type.indexOf('image') < 0) {
      swal('Sólo imágenes', 'El archivo seleccionado para la cocina no es una imagen', 'error');
      this.imgCocina = null;
      return;
    }


    this.imgCocina = archivo;

    let reader = new FileReader();
    let urlImgCocinaTemp = reader.readAsDataURL(archivo);

    reader.onloadend = () => this.imgCocinaTemp = reader.result;
  }





  seleccionImagenFachada(archivo: File) {
    if (!archivo) {
      this.imgFachada = null;
      return;
    }

    if (archivo.type.indexOf('image') < 0) {
      swal('Sólo imágenes', 'El archivo seleccionado para la fachada no es una imagen', 'error');
      this.imgFachada = null;
      return;
    }


    this.imgFachada = archivo;

    let reader = new FileReader();
    let urlImgFachadaTemp = reader.readAsDataURL(archivo);

    reader.onloadend = () => this.imgFachadaTemp = reader.result;
  }





  seleccionImagenSala(archivo: File) {
    if (!archivo) {
      this.imgSala = null;
      return;
    }

    if (archivo.type.indexOf('image') < 0) {
      swal('Sólo imágenes', 'El archivo seleccionado para la sala no es una imagen', 'error');
      this.imgSala = null;
      return;
    }


    this.imgSala = archivo;

    let reader = new FileReader();
    let urlImgSalaTemp = reader.readAsDataURL(archivo);

    reader.onloadend = () => this.imgSalaTemp = reader.result;
  }

  cambiarImagen() {
  this._subirArchivos.subirArchivo(this.imgSala, this.imgHabitacion, this.imgFachada, this.imgCocina, this.imgBanio, this.idAlojamiento)
    .then( resp => {
        console.log(resp);
      swal('Éxito', 'Alojamiento Almacenado con Éxito', 'success' );
      this.router.navigate(['/inicio']);
    })
    .catch( resp => {
      swal('Error', 'Debe seleccionar todas las imágenes', 'error');
    });
  }


  validarCampos() {
    if (this.imgFachada != null && this.imgCocina != null && this.imgBanio != null && this.imgHabitacion != null && this.imgSala != null) {
      return true;
    } else {
      return false;
    }
  }

}
