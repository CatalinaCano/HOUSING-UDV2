import { Component } from '@angular/core';
import { ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';

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
      'descripcionAlojamiento': new FormControl('', [Validators.required, Validators.minLength(50)])

  });


    // Coordenas del mapa por defecto
    this.zoom = 4;
    this.latitude = 39.8282;
    this.longitude = -98.5795;

    //  Crear el FormControl
    this.searchControl = new FormControl();

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
    console.log(this.forma.value);
  }



}
