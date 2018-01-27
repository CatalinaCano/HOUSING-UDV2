import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarService,
         SharedService } from './service.index';




@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    NavbarService,
    SharedService
  ]
})
export class ServiceModule { }
