import { Component, Injector } from '@angular/core';
import { EinstellungenAutorenNeuGenerated } from './einstellungen-autoren-neu-generated.component';

@Component({
  selector: 'page-einstellungen-autoren-neu',
  templateUrl: './einstellungen-autoren-neu.component.html'
})
export class EinstellungenAutorenNeuComponent extends EinstellungenAutorenNeuGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
