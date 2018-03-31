import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import swal from 'sweetalert';

@Injectable()
export class CondorService {

  CondorURL: string = 'https://housingud-501cb.firebaseio.com';
  usuarioCondor: any;

  constructor(private http: Http) {
   }

   obtenerUsuarioCondor(key$: string) {
    console.log('servicio condor ' + key$);
     console.log(key$);
     let url = `${this.CondorURL}/${key$}.json`;
     console.log(url);
     let headers = new Headers({
       'Content-Type': 'application/json'
     });
      return this.http.get(url)
                      .map((res: any) => {
                        console.log(res.json());
                        return res;
        }).catch((err: any) => {
          swal('Error', err.error.mensaje, 'error');
          return Observable.throw(err);
        });
   }
}
