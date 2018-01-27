import { RouterModule, Routes} from '@angular/router';

import { PagesComponent } from './pages.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { InicioComponent } from './inicio/inicio.component';
import { PerfilComponent } from './perfil/perfil.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { AlojamientoComponent } from './alojamiento/alojamiento.component';
import { AdministradorComponent } from './administrador/administrador.component';
import { InformacionComponent } from './informacion/informacion.component';



const pagesRoutes: Routes = [
    {
         path: '',
         component: PagesComponent,
         children: [
<<<<<<< HEAD
            { path: 'registrar', component: RegistrarComponent, data: {titulo: 'Registrar Alojamiento'} },
            { path: 'inicio', component: InicioComponent, data: {titulo: 'Bienvenida'}  },
            { path: 'perfil', component: PerfilComponent, data: {titulo: 'Mi Perfil'}  },
            { path: 'galeria', component: GaleriaComponent, data: {titulo: 'Galeria de Alojamientos'} },
            { path: 'alojamiento', component: AlojamientoComponent, data: {titulo: 'Descripción del Alojamiento'}},
            { path: 'administrador', component: AdministradorComponent, data: {titulo: 'Gestión de Alojamientos'} },
            { path: 'informacion', component: InformacionComponent, data: {titulo: 'Políticas de Housing-UD'} },
=======
            { path: 'registrar', component: RegistrarComponent },
            { path: 'inicio', component: InicioComponent },
            { path: 'perfil', component: PerfilComponent },
            { path: 'galeria', component: GaleriaComponent },
            { path: 'alojamiento', component: AlojamientoComponent },
            { path: 'administrador', component: AdministradorComponent },
            { path: 'informacion', component: InformacionComponent },
>>>>>>> 20270d710137de8c7025d65f337c4225c275dd1a
            { path: '', redirectTo: '/incio', pathMatch: 'full' },
     ]
    }
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );

