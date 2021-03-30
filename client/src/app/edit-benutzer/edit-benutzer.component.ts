import { Component, Injector } from '@angular/core';
import { EditBenutzerGenerated } from './edit-benutzer-generated.component';

@Component({
  selector: 'page-edit-benutzer',
  templateUrl: './edit-benutzer.component.html'
})
export class EditBenutzerComponent extends EditBenutzerGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
