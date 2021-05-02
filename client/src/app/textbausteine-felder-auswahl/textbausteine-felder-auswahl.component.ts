import { Component, Injector } from '@angular/core';
import { TextbausteineFelderAuswahlGenerated } from './textbausteine-felder-auswahl-generated.component';

@Component({
  selector: 'page-textbausteine-felder-auswahl',
  templateUrl: './textbausteine-felder-auswahl.component.html'
})
export class TextbausteineFelderAuswahlComponent extends TextbausteineFelderAuswahlGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
