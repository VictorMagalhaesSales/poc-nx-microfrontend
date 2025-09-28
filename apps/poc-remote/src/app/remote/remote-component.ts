import { Component } from '@angular/core';

@Component({
  selector: 'app-remote-component',
  template: `
    <div class="remote-widget-card">
        <h3>Remote Component</h3>
        <p>Lorem ipsum dolor sit amet. Est omnis recusandae est necessitatibus aspernatur nam neque sint. Ut reiciendis pariatur quo saepe quia qui maxime impedit sit inventore dolore ex tempora quia! Ad itaque nobis qui inventore quis eos sequi aspernatur. </p>
    </div>
  `,
  styles: `
    .remote-widget-card {
        max-width: 380px;
        margin: 20px auto;
        padding: 20px;
        border-radius: 12px;
        background: #fdfdfd;
        border: 1px solid #e0e0e0;
        text-align: center;
        font-family: Arial, sans-serif;
        box-shadow: 0 3px 8px rgba(0, 0, 0, 0.05);
    }
  `,
})
export class RemoteComponent {
}
