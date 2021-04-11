import { Component, Injector } from '@angular/core';
import { AutorenGenerated } from './autoren-generated.component';

@Component({
  selector: 'page-autoren',
  templateUrl: './autoren.component.html'
})
export class AutorenComponent extends AutorenGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
