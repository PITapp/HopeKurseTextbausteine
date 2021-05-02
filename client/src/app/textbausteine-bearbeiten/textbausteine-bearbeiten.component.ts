import { Component, Injector } from '@angular/core';
import { TextbausteineBearbeitenGenerated } from './textbausteine-bearbeiten-generated.component';

@Component({
  selector: 'page-textbausteine-bearbeiten',
  templateUrl: './textbausteine-bearbeiten.component.html'
})
export class TextbausteineBearbeitenComponent extends TextbausteineBearbeitenGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
