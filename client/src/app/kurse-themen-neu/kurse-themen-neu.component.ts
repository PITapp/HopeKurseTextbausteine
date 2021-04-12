import { Component, Injector } from '@angular/core';
import { KurseThemenNeuGenerated } from './kurse-themen-neu-generated.component';

@Component({
  selector: 'page-kurse-themen-neu',
  templateUrl: './kurse-themen-neu.component.html'
})
export class KurseThemenNeuComponent extends KurseThemenNeuGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
