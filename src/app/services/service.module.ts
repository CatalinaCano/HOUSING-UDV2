import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NavbarService,
  SharedService,
  AlojamientosService
} from './service.index';





@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    NavbarService,
    SharedService,
    AlojamientosService
  ]
})
export class ServiceModule { }
