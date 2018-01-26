import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { NotpagefoundComponent } from './notpagefound/notpagefound.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';



@NgModule({
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
