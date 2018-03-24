import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../config/config';

@Injectable()
export class SubirArchivoService {

  constructor() { }

  subirArchivo(imgSala: File, imgHabitacion: File, imgFachada: File, imgCocina: File, imgBanio: File,  idAlojamiento: string ) {
    console.log('EL ID QUE LLEGA AL ACTUALIZAR ES ' + idAlojamiento);
    return new Promise ((resolve, reject) => {
      let formData = new FormData();
      let xhr = new XMLHttpRequest();

      formData.append('imgSala', imgSala, imgSala.name);
      formData.append('imgHabitacion', imgHabitacion, imgHabitacion.name);
      formData.append('imgFachada', imgFachada, imgFachada.name);
      formData.append('imgCocina', imgCocina, imgCocina.name);
      formData.append('imgBanio', imgBanio, imgBanio.name);

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            console.log('imagen subida');
            resolve(JSON.parse(xhr.response));
          } else {
            console.log('fallo subida');
            reject(JSON.parse(xhr.response));
          }
        }
      };
      let url = URL_SERVICIOS + '/alojamiento/' + idAlojamiento;

      xhr.open('PUT', url, true);
      xhr.send( formData );

    });
  }

}
