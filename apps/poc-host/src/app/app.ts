import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcome } from './nx-welcome';

@Component({
  imports: [NxWelcome, RouterModule],
  selector: 'app-root',
  template: `
    <ul class="remote-menu">
      <li><a routerLink="/">Home</a></li>
    </ul>
    <router-outlet></router-outlet>
  `
})
export class App {
  protected title = 'poc-host';
}
