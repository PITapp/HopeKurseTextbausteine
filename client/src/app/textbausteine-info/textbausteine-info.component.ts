import { Component, Injector } from '@angular/core';
import { TextbausteineInfoGenerated } from './textbausteine-info-generated.component';

@Component({
  selector: 'page-textbausteine-info',
  templateUrl: './textbausteine-info.component.html'
})
export class TextbausteineInfoComponent extends TextbausteineInfoGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
