import { Component, Injector } from '@angular/core';
import { AutorenBearbeitenGenerated } from './autoren-bearbeiten-generated.component';

@Component({
  selector: 'page-autoren-bearbeiten',
  templateUrl: './autoren-bearbeiten.component.html'
})
export class AutorenBearbeitenComponent extends AutorenBearbeitenGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
