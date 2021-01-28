import { Component, Injector } from '@angular/core';
import { BenutzerNeuRolleGenerated } from './benutzer-neu-rolle-generated.component';

@Component({
  selector: 'page-benutzer-neu-rolle',
  templateUrl: './benutzer-neu-rolle.component.html'
})
export class BenutzerNeuRolleComponent extends BenutzerNeuRolleGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
