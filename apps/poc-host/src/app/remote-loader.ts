import { CommonModule } from '@angular/common';
import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { DialogComponentFacade, FacadeComponent } from '@ng-mf/poc-facade-lib';
import { Subject } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-remote-loader',
  imports: [CommonModule, FacadeComponent, DialogComponentFacade],
  template: `
    <div class="remote-loader-card">
      <h2>Host Application</h2>
      Lorem ipsum dolor sit amet. Est consequatur quis qui perferendis natus a possimus consectetur ut aliquam dolor nam magni quia. Est nobis eaque vel itaque rerum cum pariatur voluptas et architecto eligendi. Hic nobis ipsum eum animi quod vel deleniti neque qui quod nesciunt.

      <button class="load-btn" (click)="handleRemoteModuleButton()">
          {{ remoteLoaded ? 'Hidden Remote Component' : 'Load Remote Component' }}
      </button>

      <button class="load-btn" (click)="handleRemoteDialogButton()">
          Load Remote Dialog
      </button>
    </div>

    <lib-facade-component
      *ngIf="remoteLoaded"
      [cardTitle]="componentCardTitle"
      [cardDescription]="componentCardDescription"
    />

    <lib-facade-dialog
      *ngIf="dialogLoaded"
      [dialogTitle]="dialogTitle"
      [hideModalEmitter]="hideModalEmitter"
    />

    <div class="success-box" *ngIf="remoteLoaded">
      <span>Remote component loaded successfully!</span>
    </div>
    <div class="success-box" *ngIf="dialogLoaded">
      <span>Remote dialog loaded successfully!</span>
    </div>
  `,
  styles: `
    .remote-loader-card {
      height: 400px;
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
export class RemoteLoaderComponent implements OnInit {
  destroyRef = inject(DestroyRef);

  componentCardTitle = 'Remote Component';
  componentCardDescription = 'Lorem ipsum dolor sit amet. Est omnis recusandae est necessitatibus aspernatur nam neque sint. Ut reiciendis pariatur quo saepe quia qui maxime impedit sit inventore dolore ex tempora quia! Ad itaque nobis qui inventore quis eos sequi aspernatur.';
  dialogTitle = 'Remote Dialog';
  remoteLoaded = false;
  dialogLoaded = false;
  hideModalEmitter = new Subject<void>();

  ngOnInit(): void {
    this.hideModalEmitter
      .asObservable()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
        this.dialogLoaded = false;
      })
  }

  handleRemoteModuleButton() {
    this.remoteLoaded = !this.remoteLoaded;
  }

  handleRemoteDialogButton() {
    this.dialogLoaded = true
  }

}
