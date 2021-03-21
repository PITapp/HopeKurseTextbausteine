import { Component, Injector } from '@angular/core';
import { AddKontakteGenerated } from './add-kontakte-generated.component';

@Component({
  selector: 'page-add-kontakte',
  templateUrl: './add-kontakte.component.html'
})
export class AddKontakteComponent extends AddKontakteGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
