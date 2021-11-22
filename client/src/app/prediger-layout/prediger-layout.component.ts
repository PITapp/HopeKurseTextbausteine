import { Component, Injector } from '@angular/core';
import { PredigerLayoutGenerated } from './prediger-layout-generated.component';

@Component({
  selector: 'page-prediger-layout',
  templateUrl: './prediger-layout.component.html'
})
export class PredigerLayoutComponent extends PredigerLayoutGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
