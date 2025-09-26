import { Route } from '@angular/router';
import { RemoteEntry } from './entry';

export const remoteRoutes: Route[] = [{ path: '', component: RemoteEntry }];

export const myObject = {
    name: 'My Remote Routes Object',
    version: '1.0.0'    
}

export const teste = '';
export const teste2 = '';
export const teste3 = '';

export type Teste = {
    login(): void;
}

export interface EntryComponent {
    login(): void;
}

export const teste4 = '';