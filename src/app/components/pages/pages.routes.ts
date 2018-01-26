import { RouterModule, Routes} from '@angular/router';

import { PagesComponent } from './pages.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { InicioComponent } from './inicio/inicio.component';
import { PerfilComponent } from './perfil/perfil.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { AlojamientoComponent } from './alojamiento/alojamiento.component';
import { AdministradorComponent } from './administrador/administrador.component';



const pagesRoutes: Routes = [
    {
         path: '',
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
    }
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );

