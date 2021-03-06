import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { NotpagefoundComponent } from './components/shared/notpagefound/notpagefound.component';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '**', component: LoginComponent, data: {titulo: '404 - Página No Encontrada'}}

];

export const APP_ROUTES = RouterModule.forRoot( appRoutes, {useHash: true} );
