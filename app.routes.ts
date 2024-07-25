import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: 'child1',
    loadChildren: () => import('./child1/child1.routes').then(m => m.child1Routes),
  },
  {
    path: 'child2',
    loadChildren: () => import('./child2/child2.routes').then(m => m.child2Routes),
  },
  {
    path: '',
    redirectTo: '/child1',
    pathMatch: 'full'
  }
];
