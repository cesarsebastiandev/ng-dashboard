import { Routes } from '@angular/router';

export const carRoutes: Routes = [
  {
    path: '',
    redirectTo: 'cars',
    pathMatch: 'full',
  },
  {
    path: 'cars',
    loadComponent: () => import('./cars/cars').then((m) => m.Cars),
    title: 'Cars',
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'cars',
  },
];
