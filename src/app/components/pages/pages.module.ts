import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { InicioComponent } from './inicio/inicio.component';
import { PerfilComponent } from './perfil/perfil.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { AlojamientoComponent } from './alojamiento/alojamiento.component';
import { AdministradorComponent } from './administrador/administrador.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
    declarations: [
        PagesComponent,
        InicioComponent,
        PerfilComponent,
        GaleriaComponent,
        AlojamientoComponent,
        AdministradorComponent,
        RegistrarComponent
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
        SharedModule
    ]
})

export class PagesModule { }
