import { Component, Injector } from '@angular/core';
import { KontakteV1Generated } from './kontakte-v-1-generated.component';

@Component({
  selector: 'page-kontakte-v-1',
  templateUrl: './kontakte-v-1.component.html'
})
export class KontakteV1Component extends KontakteV1Generated {
  constructor(injector: Injector) {
    super(injector);
  }
}
