import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('./remote/remote.routes').then((m) => m.remoteRoutes),
  },
];
