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
import { ImagenesComponent } from './imagenes/imagenes.component';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';



const pagesRoutes: Routes = [
    {
         path: '',
         component: PagesComponent,
         canActivate: [ LoginGuardGuard ],
         children: [
            { path: 'alojamiento/:id', component: RegistrarComponent, data: { titulo: 'Registrar Alojamiento', icono: 'fa fa-address-card' } },
            { path: 'inicio', component: InicioComponent, data: {titulo: 'Bienvenida', icono: ''}  },
            { path: 'perfil/:id', component: PerfilComponent, data: {titulo: 'Mi Perfil', icono: 'fa fa-user'}  },
            { path: 'galeria', component: GaleriaComponent, data: {titulo: 'Galeria de Alojamientos', icono: 'fa fa-search'} },
            { path: 'alojamientoEstudiante/:idAlojamiento/:idEstudiante', component: AlojamientoComponent, data: {titulo: 'Descripción del Alojamiento', icono: 'fa fa-bed'}},
            { path: 'informacion', component: InformacionComponent, data: {titulo: 'Políticas de Housing-UD', icono: 'fa fa-commenting'}  },
            { path: 'imagenes/:id', component: ImagenesComponent, data: { titulo: 'Registrar Alojamiento', icono: 'fa fa-address-card' } },
             // Gestion
            { path: 'administrador', component: AdministradorComponent, data: {titulo: 'Gestión de Alojamientos', icono: 'fa fa-cogs'} },
            { path: 'estudiantes', component: EstudiantesComponent, data: {titulo: 'Estudiantes', icono: 'fa fa-users'} },
            { path: '', redirectTo: '/incio', pathMatch: 'full' },
     ]
    }
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );

