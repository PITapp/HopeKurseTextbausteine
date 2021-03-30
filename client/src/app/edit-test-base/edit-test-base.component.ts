import { Component, Injector } from '@angular/core';
import { EditTestBaseGenerated } from './edit-test-base-generated.component';

@Component({
  selector: 'page-edit-test-base',
  templateUrl: './edit-test-base.component.html'
})
export class EditTestBaseComponent extends EditTestBaseGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
