import { Routes } from '@angular/router';
import { PageComponent } from './modules/system/page/page.component';

export const routes: Routes = [
    {
        path: '',

        component: PageComponent,
    },

    {
        path: 'garage',
        loadComponent: ()  => import('./modules/garage/garage-page/garage-page.component').then(m => m.GaragePageComponent),
    }
];
