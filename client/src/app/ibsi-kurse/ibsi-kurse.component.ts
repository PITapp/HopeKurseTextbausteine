import { Component, Injector } from '@angular/core';
import { IbsiKurseGenerated } from './ibsi-kurse-generated.component';

@Component({
  selector: 'page-ibsi-kurse',
  templateUrl: './ibsi-kurse.component.html'
})
export class IbsiKurseComponent extends IbsiKurseGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
