import { Component, Injector } from '@angular/core';
import { AddIbsiKurseThemenGenerated } from './add-ibsi-kurse-themen-generated.component';

@Component({
  selector: 'page-add-ibsi-kurse-themen',
  templateUrl: './add-ibsi-kurse-themen.component.html'
})
export class AddIbsiKurseThemenComponent extends AddIbsiKurseThemenGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
