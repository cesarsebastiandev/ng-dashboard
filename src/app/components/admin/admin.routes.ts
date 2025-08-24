import { Routes } from '@angular/router';

export const adminRoutes: Routes = [
  {
    path: '',
    redirectTo: 'admins',
    pathMatch: 'full',
  },
  {
    path: 'admins',
    loadComponent: () => import('./admins/admins').then((m) => m.Admins),
    title: 'Admins',
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'admins',
  },
];
