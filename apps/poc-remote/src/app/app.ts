import { Component } from '@angular/core';
import { RemoteComponent } from './remote/remote-component';

@Component({
  imports: [RemoteComponent],
  selector: 'app-component',
  template: `<app-remote-component/>`,
})
export class App {}
