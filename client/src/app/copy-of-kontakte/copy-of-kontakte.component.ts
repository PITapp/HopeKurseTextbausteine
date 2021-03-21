import { Component, Injector } from '@angular/core';
import { CopyOfKontakteGenerated } from './copy-of-kontakte-generated.component';

@Component({
  selector: 'page-copy-of-kontakte',
  templateUrl: './copy-of-kontakte.component.html'
})
export class CopyOfKontakteComponent extends CopyOfKontakteGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
