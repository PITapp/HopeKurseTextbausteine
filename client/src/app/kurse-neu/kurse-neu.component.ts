import { Component, Injector } from '@angular/core';
import { KurseNeuGenerated } from './kurse-neu-generated.component';

@Component({
  selector: 'page-kurse-neu',
  templateUrl: './kurse-neu.component.html'
})
export class KurseNeuComponent extends KurseNeuGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
