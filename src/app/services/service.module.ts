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
  SubirArchivoService,
  EstudiantesHousingService
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
    SubirArchivoService,
    EstudiantesHousingService
  ]
})
export class ServiceModule { }
