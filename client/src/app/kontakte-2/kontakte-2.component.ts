import { Component, Injector } from '@angular/core';
import { Kontakte2Generated } from './kontakte-2-generated.component';

@Component({
  selector: 'page-kontakte-2',
  templateUrl: './kontakte-2.component.html'
})
export class Kontakte2Component extends Kontakte2Generated {
  constructor(injector: Injector) {
    super(injector);
  }
}
