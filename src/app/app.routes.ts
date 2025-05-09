import { Routes } from '@angular/router';
import { PageComponent } from './modules/system/page/page.component';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
          import('./modules/system/page/page.component').then(m => m.PageComponent),
      },
    {
        path: 'garage',
        loadComponent: ()  => import('./modules/garage/garage-page/garage-page.component').then(m => m.GaragePageComponent),
    },
    {
        path: 'pagina',
        loadComponent: () =>
          import('./modules/system/page/page.component').then(m => m.PageComponent),
    }
];