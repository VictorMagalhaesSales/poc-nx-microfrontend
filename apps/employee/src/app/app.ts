import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { createInstance, getInstance, loadRemote } from '@module-federation/enhanced/runtime';

@Component({
  imports: [RouterModule],
  selector: 'app-root',
  template: `
    <ul class="remote-menu">
      <li><a routerLink="/">Home</a></li>
      <li><a routerLink="login">Login</a></li>
    </ul>
    <router-outlet></router-outlet>
  `
})
export class App implements OnInit {
  // const teste: EntryComponent;

  ngOnInit(): void {
    // const mf = createInstance({
    //   name: 'host',
    //   remotes: [
    //     {
    //       name: 'login',
    //       entry: 'http://localhost:4201/mf-manifest.json',
    //     },
    //   ],
    // });
    // mf.loadRemote('login/Routes').then(m => {
    //   console.log(`Remote login: ${m}`)
    // });

    const a = getInstance();
    console.log(a);
    loadRemote('login/Routes').then((m) => {
      console.log('Remote Routes', m);
    });

    // loadRemoteModule('login', './Routes').then((m) => {
    //   console.log('Remote Routes', m);
    // });

    // import('login/Routes').then((m) => {
    //   console.log('Remote Routes', m);
    // });
  }

}
