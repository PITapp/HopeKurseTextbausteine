import { Component, Injector } from '@angular/core';
import { EditIbsiKurseThemenGenerated } from './edit-ibsi-kurse-themen-generated.component';

@Component({
  selector: 'page-edit-ibsi-kurse-themen',
  templateUrl: './edit-ibsi-kurse-themen.component.html'
})
export class EditIbsiKurseThemenComponent extends EditIbsiKurseThemenGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
