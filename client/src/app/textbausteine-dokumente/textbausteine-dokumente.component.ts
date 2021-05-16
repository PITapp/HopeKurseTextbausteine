import { Component, Injector } from '@angular/core';
import { TextbausteineDokumenteGenerated } from './textbausteine-dokumente-generated.component';

@Component({
  selector: 'page-textbausteine-dokumente',
  templateUrl: './textbausteine-dokumente.component.html'
})
export class TextbausteineDokumenteComponent extends TextbausteineDokumenteGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
