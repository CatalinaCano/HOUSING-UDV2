import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class CondorService {

  CondorURL: string = 'https://housingud-501cb.firebaseio.com';

  constructor(private http: Http) {
    console.log('servicio condor ');
   }

   obtenerUsuarioCondor(key$: string) {
    console.log('servicio condor ' + key$);
    let idUsuario = key$.split('@', 1).toString();
    console.log(idUsuario);
     let url = `${this.CondorURL}/${idUsuario}.json`;
     console.log(url);
     let headers = new Headers({
       'Content-Type': 'application/json'
     });
      return this.http.get(url)
                      .map(res => res.json());
   }

}
