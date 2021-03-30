import { Component, Injector } from '@angular/core';
import { AddTestBaseGenerated } from './add-test-base-generated.component';

@Component({
  selector: 'page-add-test-base',
  templateUrl: './add-test-base.component.html'
})
export class AddTestBaseComponent extends AddTestBaseGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
