import { Component, inject, Input, OnInit, ViewContainerRef } from '@angular/core';
import { loadRemote } from '@module-federation/enhanced/runtime';
import { Subject } from 'rxjs';
import { RemoteDialogComponent } from './contracts/types';

@Component({
  selector: 'lib-facade-dialog',
  imports: [],
  template: ``
})
export class DialogComponentFacade implements OnInit {
  vcf = inject(ViewContainerRef);

  @Input({required: true}) dialogTitle!: string;
  @Input({required: true}) hideModalEmitter!: Subject<void>;

  ngOnInit(): void {
    loadRemote('poc-remote/RemoteDialog').then((m: any) => {
      const remoteDialog = this.vcf.createComponent(m.RemoteDialog);
      const instance = remoteDialog.instance as RemoteDialogComponent;
      remoteDialog.setInput('title', this.dialogTitle);
      remoteDialog.setInput('hideModalEmitter', this.hideModalEmitter);
      instance.openModal();
    })
  }

}
