import { NgModule } from '@angular/core';
import { InicioComponent } from './inicio/inicio.component';
import { PerfilComponent } from './perfil/perfil.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { AlojamientoComponent } from './alojamiento/alojamiento.component';
import { AdministradorComponent } from './administrador/administrador.component';
import { RegistrarComponent } from './registrar/registrar.component';

@NgModule({
    declarations: [
        InicioComponent,
        PerfilComponent,
        GaleriaComponent,
        AlojamientoComponent,
        AdministradorComponent,
        RegistrarComponent
    ],
    exports: [
        InicioComponent,
        PerfilComponent,
        GaleriaComponent,
        AlojamientoComponent,
        AdministradorComponent,
        RegistrarComponent
    ]
})

export class PagesModule { }
