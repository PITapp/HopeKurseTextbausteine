import { Component, Injector } from '@angular/core';
import { EditIbsiKurseGenerated } from './edit-ibsi-kurse-generated.component';

@Component({
  selector: 'page-edit-ibsi-kurse',
  templateUrl: './edit-ibsi-kurse.component.html'
})
export class EditIbsiKurseComponent extends EditIbsiKurseGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
