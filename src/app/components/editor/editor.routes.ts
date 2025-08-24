import { Routes } from '@angular/router';
import { Editors } from './editors/editors';

export const editorRoutes: Routes = [
  {
    path: '',
    redirectTo: 'editors',
    pathMatch: 'full',
  },
  {
    path: 'editors',
    loadComponent: () => import('./editors/editors').then((m) => m.Editors),
    title: 'Editors',
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'editors',
  },
];
