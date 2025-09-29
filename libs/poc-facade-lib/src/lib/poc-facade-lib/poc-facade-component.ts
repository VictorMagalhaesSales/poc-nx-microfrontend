import { Component, inject, Input, OnInit, ViewContainerRef } from '@angular/core';
import { loadRemote } from '@module-federation/enhanced/runtime';

@Component({
  selector: 'lib-facade-component',
  imports: [],
  template: ``
})
export class FacadeComponent implements OnInit {
  vcf = inject(ViewContainerRef);

  @Input({required: true}) cardTitle!: string;
  @Input({required: true}) cardDescription!: string;

  ngOnInit(): void {

    loadRemote('poc-remote/RemoteComponent').then((m: any) => {
      const remoteComponent = this.vcf. createComponent(m.RemoteComponent);
      remoteComponent.setInput('title', this.cardTitle);
      remoteComponent.setInput('description', this.cardDescription);
    })
  }

}
