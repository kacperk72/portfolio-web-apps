import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'apps',
    loadComponent: () => import('./pages/apps/apps.page').then((m) => m.AppsPage),
  },
];
