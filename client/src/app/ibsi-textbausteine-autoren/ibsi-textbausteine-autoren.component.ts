import { Component, Injector } from '@angular/core';
import { IbsiTextbausteineAutorenGenerated } from './ibsi-textbausteine-autoren-generated.component';

@Component({
  selector: 'page-ibsi-textbausteine-autoren',
  templateUrl: './ibsi-textbausteine-autoren.component.html'
})
export class IbsiTextbausteineAutorenComponent extends IbsiTextbausteineAutorenGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
