import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { NotpagefoundComponent } from './components/shared/notpagefound/notpagefound.component';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
<<<<<<< HEAD
    { path: '**', component: NotpagefoundComponent, data: {titulo: '404 - Página No Encontrada'}}
=======
    { path: '**', component: NotpagefoundComponent}
>>>>>>> 20270d710137de8c7025d65f337c4225c275dd1a

];

export const APP_ROUTES = RouterModule.forRoot( appRoutes, {useHash: true} );
