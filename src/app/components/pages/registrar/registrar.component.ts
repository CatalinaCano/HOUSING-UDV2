import { Component } from '@angular/core';
import { ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';
import { RegistrarAlojamientoService, EstudianteService, EnviarCorreoService } from '../../../services/service.index';
import { Alojamiento } from '../../../models/alojamiento.model';
import { Estudiante } from '../../../models/estudiante.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {
  public estudiante: any;
  public latitud: number;
  public longitud: number;
  public searchControl: FormControl;
  public zoom: number;
  public estadoAlojamiento: string = 'Disponible';
  public estadoPublicacionAlojamiento: string = 'En estudio';
  public fechaPublicacionAlojamiento: string;
  public idEstudiante: string;
  public idAlojamiento: string;
  public imgSala = null;
  public imgBanio = null;
  public imgCocina = null;
  public imgHabitacion = null;
  public imgFachada = null;
  forma: FormGroup;

  @ViewChild('search')
  public searchElementRef: ElementRef;

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    public _registrarAlojamientoService: RegistrarAlojamientoService,
    public _estudianteService: EstudianteService,
    public _enviarCorreo: EnviarCorreoService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.fechaPublicacionAlojamiento = this.asignarFecha();
    this.estudiante = this._estudianteService.obtenerStorage();
    this.idEstudiante = this.estudiante._id;

    console.log('fecha en oninit ' + this.fechaPublicacionAlojamiento);
  this.forma = new FormGroup({
      'tipoVivienda': new FormControl('', Validators.required),
      'tipoHabitacion': new FormControl('', Validators.required),
      'clasificacionAlojamiento': new FormControl ('', Validators.required),
      'hospedanA': new FormControl('', Validators.required),
      'sedeCercana': new FormControl('', Validators.required),
      'zona': new FormControl('', Validators.required),
      'numeroHabitaciones': new FormControl('', Validators.required),
      'cantidadBanios': new FormControl('', Validators.required),
      'accesoCocina': new FormControl('', Validators.required),
      'espacioEstudio': new FormControl('', Validators.required),
      'sePermiteFumar': new FormControl('', Validators.required),
      'espacioAireLibre': new FormControl('', Validators.required),
      'accesoSala': new FormControl('', Validators.required),
      'habitaMascota': new FormControl('', Validators.required),
      'tipoCama': new FormControl('', Validators.required),
      'banioPrivado': new FormControl('', Validators.required),
      'guardaRopa': new FormControl('', Validators.required),
      'internet': new FormControl('', Validators.required),
      'computador': new FormControl('', Validators.required),
      'television': new FormControl('', Validators.required),
      'videoJuegos': new FormControl('', Validators.required),
      'serviciosPublicos': new FormControl('', Validators.required),
      'aguaCaliente': new FormControl('', Validators.required),
      'alimentacionIncluida': new FormControl('', Validators.required),
      'aseoHabitacion': new FormControl('', Validators.required),
      'lavadoRopa': new FormControl('', Validators.required),
      'servicioTVCable': new FormControl('', Validators.required),
      'lavadora': new FormControl('', Validators.required),
      'accesoLlaves': new FormControl('', Validators.required),
      'electrodomésticos': new FormControl('', Validators.required),
      'alarma': new FormControl('', Validators.required),
      'electrodomésticosDeCocina': new FormControl('', Validators.required),
      'habitosAlimenticios': new FormControl('', Validators.required),
      'consumoDrogas': new FormControl('', Validators.required),
      'consumoAlcohol': new FormControl('', Validators.required),
      'horaLlegada': new FormControl('', Validators.required),
      'franjaLlegada': new FormControl('', Validators.required),
      'accesoOtrasPersonas': new FormControl('', Validators.required),
      'fiestasEventos': new FormControl('', Validators.required),
      'nivelVolumen': new FormControl('', Validators.required),
      'ritosExorcismosOrgias': new FormControl('', Validators.required),
      'permiteConsumoAlcohol': new FormControl('', Validators.required),
      'permiteConsumoDrogas': new FormControl('', Validators.required),
      'centrosComerciales': new FormControl('', Validators.required),
      'museos': new FormControl('', Validators.required),
      'restaurantes': new FormControl('', Validators.required),
      'bares': new FormControl('', Validators.required),
      'iglesias': new FormControl('', Validators.required),
      'hospitales': new FormControl('', Validators.required),
      'teatros': new FormControl('', Validators.required),
      'parques': new FormControl('', Validators.required),
      'zonasComerciales': new FormControl('', Validators.required),
      'zonasCulturales': new FormControl('', Validators.required),
      'gimnasio': new FormControl('', Validators.required),
      'publico': new FormControl('', Validators.required),
      'uber': new FormControl('', Validators.required),
      'bicicleta': new FormControl('', Validators.required),
      'taxi': new FormControl('', Validators.required),
      'caminando': new FormControl('', Validators.required),
      'metro': new FormControl('', Validators.required),
      'descripcionAlojamiento': new FormControl('', [Validators.required, Validators.minLength(50)]),
      'condiciones': new FormControl(false)
  });

    this.zoom = 4;
    this.latitud = 4.6233868;
    this.longitud = -74.0662944;
    this.searchControl = new FormControl('', Validators.required);
    this.setCurrentPosition();
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ['address']
      });
      autocomplete.addListener('place_changed', () => {
        this.ngZone.run(() => {
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
          this.latitud = place.geometry.location.lat();
          this.longitud = place.geometry.location.lng();
          this.zoom = 12;
        });
      });
    });
  }

   setCurrentPosition() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitud = position.coords.latitude;
        console.log('LAT: ' + this.latitud);
        console.log('LON: ' + this.longitud);
        this.longitud = position.coords.longitude;
        this.zoom = 12;
      });
    }
  }

  guardarCambios() {
    if (this.forma.invalid) {
      return;
    }

    if (!this.forma.value.condiciones) {
      swal('Importante', 'Debes aceptar las condiciones', 'warning');
      return;
    }
    let alojamiento = new Alojamiento (
      this.estudiante,
      this.forma.value.tipoVivienda,
      this.forma.value.descripcionAlojamiento,
      this.forma.value.tipoHabitacion,
      this.forma.value.clasificacionAlojamiento,
      this.estadoAlojamiento,
      this.estadoPublicacionAlojamiento,
      this.fechaPublicacionAlojamiento,
      this.forma.value.sedeCercana,
      this.forma.value.hospedanA,
      this.latitud,
      this.longitud,
      this.forma.value.zona,
      this.imgSala,
      this.imgBanio,
      this.imgCocina,
      this.imgHabitacion,
      this.imgFachada,
      this.forma.value.habitaMascota,
      this.forma.value.horaLlegada,
      this.forma.value.franjaLlegada,
      this.forma.value.accesoOtrasPersonas,
      this.forma.value.fiestasEventos,
      this.forma.value.nivelVolumen,
      this.forma.value.ritosExorcismosOrgias,
      this.forma.value.permiteConsumoAlcohol,
      this.forma.value.permiteConsumoDrogas,
      this.forma.value.publico,
      this.forma.value.bicicleta,
      this.forma.value.taxi,
      this.forma.value.caminando,
      this.forma.value.metro,
      this.forma.value.uber,
      this.forma.value.centrosComerciales,
      this.forma.value.museos,
      this.forma.value.restaurantes,
      this.forma.value.bares,
      this.forma.value.iglesias,
      this.forma.value.hospitales,
      this.forma.value.teatros,
      this.forma.value.parques,
      this.forma.value.zonasComerciales,
      this.forma.value.zonasCulturales,
      this.forma.value.gimnasio,
      this.forma.value.internet,
      this.forma.value.computador,
      this.forma.value.television,
      this.forma.value.videoJuegos,
      this.forma.value.serviciosPublicos,
      this.forma.value.aguaCaliente,
      this.forma.value.alimentacionIncluida,
      this.forma.value.aseoHabitacion,
      this.forma.value.lavadoRopa,
      this.forma.value.servicioTVCable,
      this.forma.value.lavadora,
      this.forma.value.accesoLlaves,
      this.forma.value.electrodomésticos,
      this.forma.value.banioPrivado,
      this.forma.value.tipoCama,
      this.forma.value.electrodomésticosDeCocina,
      this.forma.value.alarma,
      this.forma.value.guardaRopa,
      this.forma.value.numeroHabitaciones,
      this.forma.value.cantidadBanios,
      this.forma.value.accesoCocina,
      this.forma.value.espacioEstudio,
      this.forma.value.sePermiteFumar,
      this.forma.value.espacioAireLibre,
      this.forma.value.accesoSala,
      this.forma.value.habitosAlimenticios,
      this.forma.value.consumoDrogas,
      this.forma.value.consumoAlcohol
    );

    this._registrarAlojamientoService.crearAlojamiento(alojamiento, this.idEstudiante ).subscribe(resp => {
      this.idAlojamiento = resp;
      let mail = this.estudiante.email;
      this._enviarCorreo.enviarCorreo(mail)
          .subscribe(res => {
            console.log(res);
          });
      this.router.navigate(['/imagenes', this.idAlojamiento]);
    });
    this.forma.reset();
  }

  limpiar() {
    this.forma.reset();
  }

  asignarFecha() {

    let fecha = new Date();
    let dd = fecha.getDate();
    let mm = fecha.getMonth() + 1;
    let dia;
    let mes;
    let yyyy = fecha.getFullYear();
    if (dd < 10) {
      dia = '0' + dd;
    } else {
      dia = dd;
    }
    if (mm < 10) {
      mes = '0' + mm;
    } else {
      mes = mm;
    }
    let today = dia + '/' + mes + '/' + yyyy;
    return today;

  }



}
