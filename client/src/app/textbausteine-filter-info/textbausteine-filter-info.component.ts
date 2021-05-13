import { Component, Injector } from '@angular/core';
import { TextbausteineFilterInfoGenerated } from './textbausteine-filter-info-generated.component';

@Component({
  selector: 'page-textbausteine-filter-info',
  templateUrl: './textbausteine-filter-info.component.html'
})
export class TextbausteineFilterInfoComponent extends TextbausteineFilterInfoGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
