import { Component, Injector } from '@angular/core';
import { IbsiKurseThemenGenerated } from './ibsi-kurse-themen-generated.component';

@Component({
  selector: 'page-ibsi-kurse-themen',
  templateUrl: './ibsi-kurse-themen.component.html'
})
export class IbsiKurseThemenComponent extends IbsiKurseThemenGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
