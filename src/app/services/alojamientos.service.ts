import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../config/config';
import { Alojamiento } from '../models/alojamiento.model';

@Injectable()
export class AlojamientosService {

  private alojamientos: any;
  /*private alojamientos: any[] = [
    {
      nombre: 'Catalina Cano',
      descripcion: 'Casa de familia ubicada en el suroccidente la ciudad.',
      img: 'assets/img/img1.jpg',
      intercambios: '1',
      habitantes: '4',
      publicacion: '10/01/2017'
    },
    {
      nombre: 'Cristhian Riaño',
      descripcion: 'Apartaestudio familiar amoblado',
      img: 'assets/img/img2.jpeg',
      intercambios: '0',
      habitantes: '6',
      publicacion: '01/05/2017'
    },
    {
      nombre: 'Frida Narváez',
      descripcion:
        // tslint:disable-next-line:max-line-length
        'El poder más reconocido de Aquaman es la capacidad telepática
         para comunicarse con la vida marina, la cual puede convocar a grandes distancias.',
      img: 'assets/img/img3.jpg',
      intercambios: '0',
      habitantes: '5',
      publicacion: '11/05/2017'
    },
    {
      nombre: 'Ximena Rodriguez',
      descripcion:
        // tslint:disable-next-line:max-line-length
        'El poder más reconocido de Aquaman es la capacidad telepática
        para comunicarse con la vida marina, la cual puede convocar a grandes distancias.',
      img: 'assets/img/img4.JPG',
      intercambios: '5',
      habitantes: '2',
      publicacion: '20/08/2017'
    },
    {
      nombre: 'Jorge Cardenas',
      descripcion:
        // tslint:disable-next-line:max-line-length
        'El poder más reconocido de Aquaman es la capacidad telepática para
        comunicarse con la vida marina, la cual puede convocar a grandes distancias.',
      img: 'assets/img/img5.jpg',
      intercambios: '1',
      habitantes: '7',
      publicacion: '10/01/2017'
    },
    {
      nombre: 'Pilar Corcho',
      descripcion:
        // tslint:disable-next-line:max-line-length

        'El poder más reconocido de Aquaman es la capacidad telepática para
         comunicarse con la vida marina, la cual puede convocar a grandes distancias.',
      img: 'assets/img/img6.jpg',
      intercambios: '1',
      habitantes: '3',
      publicacion: '09/03/2017'
    },
    {
      nombre: 'Aldemar Ome',
      // tslint:disable-next-line:max-line-length
      descripcion:
        // tslint:disable-next-line:max-line-length
        'El poder más reconocido de Aquaman es la capacidad telepática para
        comunicarse con la vida marina, la cual puede convocar a grandes distancias.',
      img: 'assets/img/img8.gif',
      intercambios: '0',
      habitantes: '5',
      publicacion: '10/07/2017'
    },
    {
      nombre: 'Derly Araujo',
      // tslint:disable-next-line:max-line-length
      descripcion:
        // tslint:disable-next-line:max-line-length
        'El poder más reconocido de Aquaman es la capacidad telepática
         para comunicarse con la vida marina, la cual puede convocar a grandes distancias.',
      img: 'assets/img/img9.jpg',
      intercambios: '10',
      habitantes: '3',
      publicacion: '13/06/2017'
    },
    {
      nombre: 'Jeronimo Castillo',
      // tslint:disable-next-line:max-line-length
      descripcion:
        // tslint:disable-next-line:max-line-length
        'El poder más reconocido de Aquaman es la capacidad telepática
         para comunicarse con la vida marina, la cual puede convocar a grandes distancias.',
      img: 'assets/img/img10.jpg',
      intercambios: '5',
      habitantes: '2',
      publicacion: '14/04/2017'
    }
  ];*/

  constructor(
    public http: HttpClient
  ) {
    console.log('Servicio listo para usarse');
  }


  getAlojamientos() {
    let url = URL_SERVICIOS + '/busqueda/galeria';
    return this.http.get(url)
      .map((resp: any) => {
        console.log(resp.alojamientos.json());
        this.alojamientos = resp.alojamientos.json();
        return resp.alojamientos;
      });

  }
/*
  getAlojamientos() {
    // return this.alojamientos;
    return this.http.get(url)
      .map((resp: any) => {
        console.log(resp.alojamientos.json());
        this.alojamientos = resp.alojamientos.json();
        return resp.alojamientos;

      });
  }*/
}
