import { Component, Injector } from '@angular/core';
import { TextbausteineGenerated } from './textbausteine-generated.component';

@Component({
  selector: 'page-textbausteine',
  templateUrl: './textbausteine.component.html'
})
export class TextbausteineComponent extends TextbausteineGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
