import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../../config/config';
import { AlojamientoConsulta } from '../../../models/alojamientoConsulta.model';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  alojamientos: AlojamientoConsulta[] = [];
  estudiantes: any[] = [];
  // sedes: any[] = [];

  constructor(
      public ativatedRoute: ActivatedRoute,
      public http: HttpClient
    ) {
      ativatedRoute.params.subscribe( params => {
        let termino = params['termino'];
        this.buscar(termino);
      });
   }

  ngOnInit() {
  }

  buscar(termino: string) {
    let url = URL_SERVICIOS + '/busqueda/todo/' + termino;
    this.http.get(url)
            .subscribe((resp: any) => {
              this.alojamientos = resp.alojamientos;
              this.estudiantes = resp.sedes;
            });

  }


}
