import { Component, Injector } from '@angular/core';
import { TestBaseGenerated } from './test-base-generated.component';

@Component({
  selector: 'page-test-base',
  templateUrl: './test-base.component.html'
})
export class TestBaseComponent extends TestBaseGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
