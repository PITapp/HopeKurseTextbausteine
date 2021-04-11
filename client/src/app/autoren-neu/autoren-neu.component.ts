import { Component, Injector } from '@angular/core';
import { AutorenNeuGenerated } from './autoren-neu-generated.component';

@Component({
  selector: 'page-autoren-neu',
  templateUrl: './autoren-neu.component.html'
})
export class AutorenNeuComponent extends AutorenNeuGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
