import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./shared/dashboard.routes').then((m) => m.dashboardRoutes),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
];
