// Modulos
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PagesModule } from './components/pages/pages.module';

// Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { NotpagefoundComponent } from './components/shared/notpagefound/notpagefound.component';
import { BreadcrumbsComponent } from './components/shared/breadcrumbs/breadcrumbs.component';
import { PagesComponent } from './components/pages/pages.component';

// RUTAS
import { APP_ROUTES } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    NotpagefoundComponent,
    BreadcrumbsComponent,
    PagesComponent
  ],
  imports: [
    BrowserModule,
    PagesModule,
    APP_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
