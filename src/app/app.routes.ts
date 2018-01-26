import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/pages/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrarComponent } from './components/pages/registrar/registrar.component';
import { AdministradorComponent } from './components/pages/administrador/administrador.component';
import { AlojamientoComponent } from './components/pages/alojamiento/alojamiento.component';
import { GaleriaComponent } from './components/pages/galeria/galeria.component';
import { PerfilComponent } from './components/pages/perfil/perfil.component';
import { patch } from 'webdriver-js-extender';
import { NotpagefoundComponent } from './components/shared/notpagefound/notpagefound.component';
import { PagesComponent } from './components/pages/pages.component';




const appRoutes: Routes = [
    { path: '',
     component: PagesComponent,
     children: [
        { path: 'registrar', component: RegistrarComponent },
        { path: 'inicio', component: InicioComponent },
        { path: 'perfil', component: PerfilComponent },
        { path: 'galeria', component: GaleriaComponent },
        { path: 'alojamiento', component: AlojamientoComponent },
        { path: 'administrador', component: AdministradorComponent },
        { path: '', redirectTo: '/incio', pathMatch: 'full' },
     ]
    },
    { path: 'login', component: LoginComponent },
    { path: '**', component: NotpagefoundComponent}

];

export const APP_ROUTES = RouterModule.forRoot( appRoutes, {useHash: true} );
