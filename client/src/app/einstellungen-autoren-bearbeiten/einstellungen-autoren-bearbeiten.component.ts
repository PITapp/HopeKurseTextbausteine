import { Component, Injector } from '@angular/core';
import { EinstellungenAutorenBearbeitenGenerated } from './einstellungen-autoren-bearbeiten-generated.component';

@Component({
  selector: 'page-einstellungen-autoren-bearbeiten',
  templateUrl: './einstellungen-autoren-bearbeiten.component.html'
})
export class EinstellungenAutorenBearbeitenComponent extends EinstellungenAutorenBearbeitenGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
