import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { NotpagefoundComponent } from './notpagefound/notpagefound.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { RouterModule } from '@angular/router';
import { ServiceModule } from '../../services/service.module';
import { CommonModule } from '@angular/common';
import { PipesModule } from '../../pipes/pipes.module';




@NgModule({
    imports: [
        RouterModule,
        ServiceModule,
        CommonModule,
        PipesModule
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
