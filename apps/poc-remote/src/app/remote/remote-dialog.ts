import { Component, Input } from '@angular/core';
import { Button } from 'primeng/button';
import { Dialog } from 'primeng/dialog';
import { InputText } from 'primeng/inputtext';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-remote-component',
  imports: [Dialog, Button, InputText],
  template: `
    <p-dialog 
      [header]="title ?? 'Card Title'" 
      [modal]="true" 
      [(visible)]="showDialog" 
      [style]="{ width: '25rem' }"
      (onHide)="hideModal()"
    >
        <span class="dialog-description">Update your information.</span>
        
        <div class="form-row">
            <label for="username" class="label-col">Username</label>
            <input pInputText id="username" autocomplete="off" />
        </div>
        
        <div class="form-row">
            <label for="email" class="label-col">Email</label>
            <input pInputText id="email" autocomplete="off" />
        </div>
    </p-dialog>
  `,
  styles: [`
    .dialog-description {
      display: block;
      margin-bottom: 2rem;
    }

    .form-row {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 1rem; 
    }

    .label-col {
      font-weight: 600;
      width: 6rem;
      flex-shrink: 0;
    }
  `]
})
export class RemoteDialog {
  @Input() title!: string;
  @Input() hideModalEmitter!: Subject<void>;

  showDialog = true; 

  hideModal() {
    this.hideModalEmitter.next();
  }
}
