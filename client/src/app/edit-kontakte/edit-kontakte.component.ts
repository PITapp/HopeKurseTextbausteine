import { Component, Injector } from '@angular/core';
import { EditKontakteGenerated } from './edit-kontakte-generated.component';

@Component({
  selector: 'page-edit-kontakte',
  templateUrl: './edit-kontakte.component.html'
})
export class EditKontakteComponent extends EditKontakteGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
