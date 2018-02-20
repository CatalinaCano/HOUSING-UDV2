import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { element } from 'protractor';
import { EstudianteService } from '../../services/service.index';

declare const gapi: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  auth2: any;

  constructor(
    public router: Router,
    public _estudianteService: EstudianteService
  ) { }

  ngOnInit() {
    this.googleInit();
  }

  googleInit() {
    gapi.load('auth2', () => {

      this.auth2 = gapi.auth2.init({
        client_id: '430294334235-ab0t1b1e45bml213k82lld46ng1s9dfk.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        scope: 'profile email'
      });
      this.attachSignin(document.getElementById('btnGoogle'));
    });
  }

  // tslint:disable-next-line:no-shadowed-variable
  attachSignin( element) {
      this.auth2.attachClickHandler(element, { }, (googleUser) => {
          let profile = googleUser.getBasicProfile();
          console.log(profile);
          let token = googleUser.getAuthResponse().id_token;
          console.log(token);
        this._estudianteService.loginGoogle(token)
            .subscribe(  () => window.location.href = '#/inicio');
      });


  }
  ingresar() {
    console.log('Ingresando');
    this.router.navigate(['/inicio']);
  }

}
