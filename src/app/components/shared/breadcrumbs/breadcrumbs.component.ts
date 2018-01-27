import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Router, ActivationEnd } from '@angular/router';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import { Title } from '@angular/platform-browser/';
=======
>>>>>>> 20270d710137de8c7025d65f337c4225c275dd1a

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit {

<<<<<<< HEAD
  pagina = '';

  constructor(
              private router: Router,
              public titulo: Title ) {

      this.getDataRoute()
      .subscribe(data => {
        console.log(data);
        this.pagina = data.titulo;
        this.titulo.setTitle( this.pagina );
      });
   }

   getDataRoute() {
      return this.router.events
      .filter(evento => evento instanceof ActivationEnd)
      .filter((evento: ActivationEnd) => evento.snapshot.firstChild === null)
      .map ((evento: ActivationEnd) => evento.snapshot.data);
   }
=======
  constructor() { }
>>>>>>> 20270d710137de8c7025d65f337c4225c275dd1a

  ngOnInit() {
  }

}
