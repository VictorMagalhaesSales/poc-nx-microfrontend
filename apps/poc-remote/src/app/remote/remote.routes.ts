import { Route } from '@angular/router';
import { RemoteComponent } from './remote-component';
import { RemoteDialog } from './remote-dialog';

export const remoteRoutes: Route[] = [
    { path: '', component: RemoteComponent },
    { path: 'dialog', component: RemoteDialog }
];
