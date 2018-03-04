import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'imagenes',
  templateUrl: './imagenes.component.html',
})
export class ImagenesComponent implements OnInit {
  public idAlojamiento: string;
  public imgSala = null;
  public imgBanio = null;
  public imgCocina = null;
  public imgHabitacion = null;
  public imgFachada = null;

  constructor(
    public router: Router,
    public route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.params
      .subscribe(parametros => {
        this.idAlojamiento = parametros['id'];
        console.log('parametros del imagenes component' + this.idAlojamiento);
         // this._condorService.obtenerUsuarioCondor(this.id)
           // .subscribe(res => {
             // this.usuarioCondor = res.json();
            // }, error => console.log(error));
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
  }


  guardarCambios() {

  }

}
