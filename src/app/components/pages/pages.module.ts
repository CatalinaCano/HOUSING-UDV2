import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ApplicationRef } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { PipesModule } from '../../pipes/pipes.module';

import { PAGES_ROUTES } from './pages.routes';

import { PagesComponent } from './pages.component';
import { InicioComponent } from './inicio/inicio.component';
import { PerfilComponent } from './perfil/perfil.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { AlojamientoComponent } from './alojamiento/alojamiento.component';
import { AdministradorComponent } from './administrador/administrador.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { SharedModule } from '../shared/shared.module';
import { InformacionComponent } from './informacion/informacion.component';
import { InformacionPerfilComponent } from './informacion-perfil/informacion-perfil.component';



@NgModule({
    declarations: [
        PagesComponent,
        InicioComponent,
        PerfilComponent,
        GaleriaComponent,
        AlojamientoComponent,
        AdministradorComponent,
        RegistrarComponent,
        InformacionComponent,
        InformacionPerfilComponent
    ],
    exports: [
        PagesComponent,
        InicioComponent,
        PerfilComponent,
        GaleriaComponent,
        AlojamientoComponent,
        AdministradorComponent,
        RegistrarComponent
    ],
    imports: [
        SharedModule,
        CommonModule,
        PAGES_ROUTES,
        BrowserModule,
        FormsModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyD8ybUhErV1uJUHmHzNP92-P5Mfe9VCwHA',
            libraries: ['places']
        }),
        ReactiveFormsModule,
        PipesModule
    ]
})

export class PagesModule { }
