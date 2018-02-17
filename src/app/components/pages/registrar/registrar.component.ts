import { Component } from '@angular/core';
import { ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';
import swal from 'sweetalert';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;

  forma: FormGroup;


  @ViewChild('search')
  public searchElementRef: ElementRef;

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) { }

  ngOnInit(): void {
  // Validar campos

  this.forma = new FormGroup({
      'tipoVivienda': new FormControl('', Validators.required),
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
      'gimnasios': new FormControl('', Validators.required),
      'publico': new FormControl('', Validators.required),
      'uber': new FormControl('', Validators.required),
      'bicicleta': new FormControl('', Validators.required),
      'taxi': new FormControl('', Validators.required),
      'caminando': new FormControl('', Validators.required),
      'metro': new FormControl('', Validators.required),
       'imgHabitacion': new FormControl(false ),
      'imgFachada': new FormControl(false),
      'imgSala': new FormControl(false),
      'imgCocina': new FormControl(false),
      'imgBanio': new FormControl(false),
      'descripcionAlojamiento': new FormControl('', [Validators.required, Validators.minLength(50)]),
      'condiciones': new FormControl(false)
  });


    // Coordenas del mapa por defecto
    this.zoom = 4;
    this.latitude = 39.8282;
    this.longitude = -98.5795;

    //  Crear el FormControl
    this.searchControl = new FormControl('', Validators.required);

    // Colocar posicion actual
    this.setCurrentPosition();

    // load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ['address']
      });
      autocomplete.addListener('place_changed', () => {
        this.ngZone.run(() => {
          // get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          // verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          // set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 12;
        });
      });
    });
  }

   setCurrentPosition() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        console.log('LAT: ' + this.latitude);
        console.log('LON: ' + this.longitude);
        this.longitude = position.coords.longitude;
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
    } else {
      swal('Importante', 'Debes aceptar las condiciones', 'success');
    }
    console.log(this.forma.value);
  }



}
