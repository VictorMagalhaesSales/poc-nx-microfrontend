import { Component, inject, Input, OnChanges, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs';
import { RemoteDialogComponent } from './contracts/types';
import { loadRemoteComponent } from './utils';

@Component({
  selector: 'lib-facade-dialog',
  imports: [],
  template: ``
})
export class DialogComponentFacade implements OnChanges {
  vcf = inject(ViewContainerRef);

  @Input({required: true}) dialogTitle!: string;
  @Input({required: true}) hideModalEmitter!: Subject<void>;

  ngOnChanges(): void {
    if (this.dialogTitle) {
      this.loadDialog();
    }
  }

  private async loadDialog(): Promise<void> {
    const remoteComponent = await loadRemoteComponent<RemoteDialogComponent>('poc-remote', 'RemoteDialog');
    const remoteDialog = this.vcf.createComponent(remoteComponent);
    remoteDialog.instance.title = this.dialogTitle;
    remoteDialog.instance.hideModalEmitter = this.hideModalEmitter;
    remoteDialog.instance.openModal();
  }

}
