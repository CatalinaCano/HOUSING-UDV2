import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { NotpagefoundComponent } from './notpagefound/notpagefound.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { RouterModule } from '@angular/router';
import { ServiceModule } from '../../services/service.module';
import { CommonModule } from '@angular/common';




@NgModule({
    imports: [
        RouterModule,
        ServiceModule,
        CommonModule
    ],
    declarations: [
        NavbarComponent,
        NotpagefoundComponent,
        BreadcrumbsComponent
    ],
    exports: [
        NavbarComponent,
        NotpagefoundComponent,
        BreadcrumbsComponent
    ]
})

export class SharedModule { }