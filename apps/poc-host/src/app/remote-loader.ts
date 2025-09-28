import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FacadeComponent } from '@ng-mf/poc-facade-lib';

@Component({
  selector: 'app-remote-loader',
  imports: [CommonModule, FacadeComponent],
  template: `
    <div class="remote-loader-card">
        <h2>Host Application</h2>
        Lorem ipsum dolor sit amet. Est consequatur quis qui perferendis natus a possimus consectetur ut aliquam dolor nam magni quia. Est nobis eaque vel itaque rerum cum pariatur voluptas et architecto eligendi. Hic nobis ipsum eum animi quod vel deleniti neque qui quod nesciunt.

        <button class="load-btn" (click)="handleRemoteModuleButton()">
           {{ remoteLoaded ? 'Hidden Remote Component' : 'Load Remote Component' }}
        </button>
    </div>

    <lib-facade
      *ngIf="remoteLoaded"
      [cardTitle]="componentCardTitle"
      [cardDescription]="componentCardDescription"
    />

    <div class="success-box" *ngIf="remoteLoaded">
        <span>Remote component loaded successfully!</span>
    </div>
  `,
  styles: `
    * {
        font-family: Arial, sans-serif;
    }

    .remote-loader-card {
        height: 300px;
        max-width: 420px;
        margin: 40px auto;
        padding: 24px;
        border-radius: 12px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }

    .load-btn {
        background: linear-gradient(135deg, #4e9af1, #357ae8);
        border: none;
        border-radius: 8px;
        padding: 12px 18px;
        font-size: 1rem;
        color: white;
        cursor: pointer;
        transition: background 0.3s ease, transform 0.1s ease;
    }

    .load-btn:hover {
        background: linear-gradient(135deg, #357ae8, #2563c9);
    }

    .success-box {
        padding: 20px;
        margin: 20px;
        position: fixed;
        right: 0;
        bottom: 0;
        border-radius: 8px;
        background: #2dc97b;
        color: #ffffff;
        font-weight: 500;
    }
  `,
})
export class RemoteLoaderComponent {
  componentCardTitle = 'Remote Component';
  componentCardDescription = 'Lorem ipsum dolor sit amet. Est omnis recusandae est necessitatibus aspernatur nam neque sint. Ut reiciendis pariatur quo saepe quia qui maxime impedit sit inventore dolore ex tempora quia! Ad itaque nobis qui inventore quis eos sequi aspernatur.';
  remoteLoaded = false;

  handleRemoteModuleButton() {
      this.remoteLoaded = !this.remoteLoaded;
  }

}
