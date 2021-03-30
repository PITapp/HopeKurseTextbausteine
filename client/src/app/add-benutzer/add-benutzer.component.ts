import { Component, Injector } from '@angular/core';
import { AddBenutzerGenerated } from './add-benutzer-generated.component';

@Component({
  selector: 'page-add-benutzer',
  templateUrl: './add-benutzer.component.html'
})
export class AddBenutzerComponent extends AddBenutzerGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
