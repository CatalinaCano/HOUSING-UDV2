import { RouterModule, Routes} from '@angular/router';

import { PagesComponent } from './pages.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { InicioComponent } from './inicio/inicio.component';
import { PerfilComponent } from './perfil/perfil.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { AlojamientoComponent } from './alojamiento/alojamiento.component';
import { AdministradorComponent } from './administrador/administrador.component';
import { InformacionComponent } from './informacion/informacion.component';
import { LoginGuardGuard } from '../../services/service.index';



const pagesRoutes: Routes = [
    {
         path: '',
         component: PagesComponent,
         canActivate: [ LoginGuardGuard ],
         children: [
             { path: 'registrar', component: RegistrarComponent, data: { titulo: 'Registrar Alojamiento', icono: 'fa fa-address-card' } },
            { path: 'inicio', component: InicioComponent, data: {titulo: 'Bienvenida', icono: ''}  },
            { path: 'perfil', component: PerfilComponent, data: {titulo: 'Mi Perfil', icono: 'fa fa-user'}  },
            { path: 'galeria', component: GaleriaComponent, data: {titulo: 'Galeria de Alojamientos', icono: 'fa fa-search'} },
            { path: 'alojamiento', component: AlojamientoComponent, data: {titulo: 'Descripción del Alojamiento', icono: 'fa fa-bed'}},
            { path: 'informacion', component: InformacionComponent, data: {titulo: 'Políticas de Housing-UD', icono: 'fa fa-commenting'}  },
            { path: 'administrador', component: AdministradorComponent, data: {titulo: 'Gestión de Alojamientos', icono: 'fa fa-cogs'} },
            { path: '', redirectTo: '/incio', pathMatch: 'full' },
     ]
    }
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );

