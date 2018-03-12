import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../../config/config';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  constructor(
      public ativatedRoute: ActivatedRoute,
      public http: HttpClient
    ) {
      ativatedRoute.params.subscribe( params => {
        let termino = params['termino'];
        console.log(termino);
      });
   }

  ngOnInit() {
  }

  buscar(termino: string) {
    let url = URL_SERVICIOS + '/busqueda/todo/' + termino;
    this.http.get(url);

  }


}
