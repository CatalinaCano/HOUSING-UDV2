import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class CondorService {

  CondorURL: string = 'https://housingud-501cb.firebaseio.com/estudiantes';

  constructor( private http: Http) {
    console.log('servicio condor ');
   }

   obtenerUsuarioCondor(key$: string) {
     let  url = `${this.CondorURL}/${key$}.json`;
     let headers = new Headers({
       'Content-Type': 'application/json'
     });
      return this.http.get(url)
                      .map(res => res.json());
   }

}
