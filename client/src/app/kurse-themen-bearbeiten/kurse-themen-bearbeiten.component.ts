import { Component, Injector } from '@angular/core';
import { KurseThemenBearbeitenGenerated } from './kurse-themen-bearbeiten-generated.component';

@Component({
  selector: 'page-kurse-themen-bearbeiten',
  templateUrl: './kurse-themen-bearbeiten.component.html'
})
export class KurseThemenBearbeitenComponent extends KurseThemenBearbeitenGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
