import { Pipe, PipeTransform } from '@angular/core';
import { URL_SERVICIOS } from '../config/config';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(img: string, tipo: string= 'google'): any {
    let url = URL_SERVICIOS + '/imagenes';
    if (!img) {
      return url + '/usuario/xxx';
    }

    if (img.indexOf('https') >= 0) {
      return img;
    }

    if (tipo === 'alojamiento') {
        return url + img;
    }

    return 'FUNCIONA';
  }

}
