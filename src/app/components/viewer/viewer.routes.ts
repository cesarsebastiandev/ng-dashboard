import { Routes } from '@angular/router';
import { Viewers } from './viewers/viewers';

export const viewerRoutes: Routes = [
  {
    path: '',
    redirectTo: 'viewers',
    pathMatch: 'full',
  },
  {
    path: 'viewers',
    loadComponent: () => import('./viewers/viewers').then((m) => m.Viewers),
    title: 'Viewers',
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'viewers',
  },
];
