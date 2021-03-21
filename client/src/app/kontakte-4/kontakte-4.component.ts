import { Component, Injector } from '@angular/core';
import { Kontakte4Generated } from './kontakte-4-generated.component';

@Component({
  selector: 'page-kontakte-4',
  templateUrl: './kontakte-4.component.html'
})
export class Kontakte4Component extends Kontakte4Generated {
  constructor(injector: Injector) {
    super(injector);
  }
}
