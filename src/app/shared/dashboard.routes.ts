import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { Home } from './home/home';

export const dashboardRoutes: Routes = [
  {
    path: '',
    component: Dashboard,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        component: Home,
        title: 'Home',
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('../components/settings/settings.routes').then(
            (m) => m.settingsRoutes
          ),
      },
      {
        path: 'admin',
        loadChildren: () =>
          import('../components/admin/admin.routes').then((m) => m.adminRoutes),
      },
      {
        path: 'user',
        loadChildren: () =>
          import('../components/user/user.routes').then((m) => m.userRoutes),
      },
      {
        path: 'editor',
        loadChildren: () =>
          import('../components/editor/editor.routes').then(
            (m) => m.editorRoutes
          ),
      },
      {
        path: 'viewer',
        loadChildren: () =>
          import('../components/viewer/viewer.routes').then(
            (m) => m.viewerRoutes
          ),
      },
      {
        path: 'car',
        loadChildren: () =>
          import('../components/car/car.routes').then((m) => m.carRoutes),
      },
      {
        path: 'article',
        loadChildren: () =>
          import('../components/article/article.routes').then(
            (m) => m.articleRoutes
          ),
      },
      {
        path: 'drawer',
        loadChildren: () =>
          import('../components/drawer/drawer.routes').then(
            (m) => m.drawerRoutes
          ),
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'home',
      },
    ],
  },
];
