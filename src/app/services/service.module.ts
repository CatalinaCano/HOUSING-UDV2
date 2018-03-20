import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {
  EstudianteService,
  NavbarService,
  AlojamientosService,
  RegistrarAlojamientoService,
  LoginGuardGuard,
  CondorService,
  SubirArchivoService,
  EstudiantesHousingService,
  EstadisticasService,
  AdminGuard,
  EstudianteGuard,
  EnviarCorreoService
} from './service.index';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [
    NavbarService,
    AlojamientosService,
    EstudianteService,
    RegistrarAlojamientoService,
    LoginGuardGuard,
    CondorService,
    SubirArchivoService,
    EstudiantesHousingService,
    EstadisticasService,
    AdminGuard,
    EstudianteGuard,
    EnviarCorreoService
  ]
})
export class ServiceModule { }
