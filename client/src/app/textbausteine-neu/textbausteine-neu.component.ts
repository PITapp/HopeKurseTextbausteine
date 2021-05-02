import { Component, Injector } from '@angular/core';
import { TextbausteineNeuGenerated } from './textbausteine-neu-generated.component';

@Component({
  selector: 'page-textbausteine-neu',
  templateUrl: './textbausteine-neu.component.html'
})
export class TextbausteineNeuComponent extends TextbausteineNeuGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
