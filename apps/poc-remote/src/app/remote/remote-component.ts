import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-remote-component',
  template: `
    <div class="remote-widget-card">
        <h3>{{ title }}</h3>
        <p>{{ description }}</p>
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
  @Input() title!: string;
  @Input() description!: string;
}
