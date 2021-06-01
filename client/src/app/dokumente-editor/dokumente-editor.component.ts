import { Component, Injector } from '@angular/core';
import { DokumenteEditorGenerated } from './dokumente-editor-generated.component';

@Component({
  selector: 'page-dokumente-editor',
  templateUrl: './dokumente-editor.component.html'
})
export class DokumenteEditorComponent extends DokumenteEditorGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
