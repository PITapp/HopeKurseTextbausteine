import { Component, Injector } from '@angular/core';
import { InfoboxTextbausteineFilterTextGenerated } from './infobox-textbausteine-filter-text-generated.component';

@Component({
  selector: 'page-infobox-textbausteine-filter-text',
  templateUrl: './infobox-textbausteine-filter-text.component.html'
})
export class InfoboxTextbausteineFilterTextComponent extends InfoboxTextbausteineFilterTextGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
