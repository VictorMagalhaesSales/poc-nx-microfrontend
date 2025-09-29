import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  imports: [RouterModule],
  selector: 'app-component',
  template: `<router-outlet></router-outlet>`
})
export class App {}
