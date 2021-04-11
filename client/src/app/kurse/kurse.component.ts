import { Component, Injector } from '@angular/core';
import { KurseGenerated } from './kurse-generated.component';

@Component({
  selector: 'page-kurse',
  templateUrl: './kurse.component.html'
})
export class KurseComponent extends KurseGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
