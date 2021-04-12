import { Component, Injector } from '@angular/core';
import { KurseBearbeitenGenerated } from './kurse-bearbeiten-generated.component';

@Component({
  selector: 'page-kurse-bearbeiten',
  templateUrl: './kurse-bearbeiten.component.html'
})
export class KurseBearbeitenComponent extends KurseBearbeitenGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
