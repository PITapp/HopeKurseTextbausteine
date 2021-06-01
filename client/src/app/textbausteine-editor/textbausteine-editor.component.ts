import { Component, Injector } from '@angular/core';
import { TextbausteineEditorGenerated } from './textbausteine-editor-generated.component';

@Component({
  selector: 'page-textbausteine-editor',
  templateUrl: './textbausteine-editor.component.html'
})
export class TextbausteineEditorComponent extends TextbausteineEditorGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
