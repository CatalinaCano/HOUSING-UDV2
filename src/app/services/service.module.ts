import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


import {
  EstudianteService,
  NavbarService,
  SharedService,
  AlojamientosService,
  RegistrarAlojamientoService,
  LoginGuardGuard,
  CondorService,
  SubirArchivoService
} from './service.index';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [
    NavbarService,
    SharedService,
    AlojamientosService,
    EstudianteService,
    RegistrarAlojamientoService,
    LoginGuardGuard,
    CondorService,
    SubirArchivoService
  ]
})
export class ServiceModule { }
