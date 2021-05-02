import { Component, Injector } from '@angular/core';
import { TextbausteineDuplizierenGenerated } from './textbausteine-duplizieren-generated.component';

@Component({
  selector: 'page-textbausteine-duplizieren',
  templateUrl: './textbausteine-duplizieren.component.html'
})
export class TextbausteineDuplizierenComponent extends TextbausteineDuplizierenGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
