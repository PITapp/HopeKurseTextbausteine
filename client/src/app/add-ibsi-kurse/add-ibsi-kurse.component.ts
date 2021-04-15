import { Component, Injector } from '@angular/core';
import { AddIbsiKurseGenerated } from './add-ibsi-kurse-generated.component';

@Component({
  selector: 'page-add-ibsi-kurse',
  templateUrl: './add-ibsi-kurse.component.html'
})
export class AddIbsiKurseComponent extends AddIbsiKurseGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
