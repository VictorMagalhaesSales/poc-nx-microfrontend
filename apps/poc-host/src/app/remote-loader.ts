import { CommonModule } from '@angular/common';
import { Component, inject, ViewContainerRef } from '@angular/core';
import { loadRemote } from '@module-federation/enhanced/runtime';

@Component({
  selector: 'app-remote-loader',
  imports: [CommonModule],
  template: `
    <div class="remote-loader-card">
        <h2>Host Application</h2>
        Lorem ipsum dolor sit amet. Est consequatur quis qui perferendis natus a possimus consectetur ut aliquam dolor nam magni quia. Est nobis eaque vel itaque rerum cum pariatur voluptas et architecto eligendi. Hic nobis ipsum eum animi quod vel deleniti neque qui quod nesciunt.

        <button class="load-btn" (click)="loadRemoteModule()">
            {{ isLoading ? 'Loading...' : 'Load Remote Component' }}
        </button>

        <div *ngIf="remoteLoaded && !isLoading">
            <div class="success-box">
                <span>Remote component loaded successfully!</span>
            </div>
        </div>
    </div>
  `,
  styles: `
    .remote-loader-card {
        height: 300px;
        max-width: 420px;
        margin: 40px auto;
        padding: 24px;
        border-radius: 12px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        text-align: center;
        font-family: Arial, sans-serif;
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
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        padding: 12px;
        border-radius: 8px;
        background: #e9f9f1;
        color: #2e7d32;
        font-weight: 500;
    }
  `,
})
export class RemoteLoaderComponent {
  isLoading = false;
  remoteLoaded = false;
  vcf = inject(ViewContainerRef);

  async loadRemoteModule() {
    this.isLoading = true;

    loadRemote('poc-remote/RemoteComponent').then((m: any) => {
      this.vcf. createComponent(m.RemoteComponent);
      this.isLoading = false;
      this.remoteLoaded = true;
    })
  }
}
