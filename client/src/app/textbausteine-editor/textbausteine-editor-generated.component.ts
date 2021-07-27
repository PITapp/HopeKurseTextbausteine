/*
  This file is automatically generated. Any changes will be overwritten.
  Modify textbausteine-editor.component.ts instead.
*/
import { LOCALE_ID, ChangeDetectorRef, ViewChild, AfterViewInit, Injector, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Subscription } from 'rxjs';

import { DialogService, DIALOG_PARAMETERS, DialogRef } from '@radzen/angular/dist/dialog';
import { NotificationService } from '@radzen/angular/dist/notification';
import { ContentComponent } from '@radzen/angular/dist/content';
import { PanelComponent } from '@radzen/angular/dist/panel';
import { HtmlComponent } from '@radzen/angular/dist/html';
import { ButtonComponent } from '@radzen/angular/dist/button';

import { ConfigService } from '../config.service';
import { MeldungJaNeinComponent } from '../meldung-ja-nein/meldung-ja-nein.component';

import { DbHopeKurseTextbausteineService } from '../db-hope-kurse-textbausteine.service';
import { SecurityService } from '../security.service';

export class TextbausteineEditorGenerated implements AfterViewInit, OnInit, OnDestroy {
  // Components
  @ViewChild('content1') content1: ContentComponent;
  @ViewChild('panel6') panel6: PanelComponent;
  @ViewChild('htmlEditorTextbausteine') htmlEditorTextbausteine: HtmlComponent;
  @ViewChild('buttonKopieren') buttonKopieren: ButtonComponent;
  @ViewChild('buttonSpeichern') buttonSpeichern: ButtonComponent;
  @ViewChild('button1') button1: ButtonComponent;

  router: Router;

  cd: ChangeDetectorRef;

  route: ActivatedRoute;

  notificationService: NotificationService;

  configService: ConfigService;

  dialogService: DialogService;

  dialogRef: DialogRef;

  httpClient: HttpClient;

  locale: string;

  _location: Location;

  _subscription: Subscription;

  dbHopeKurseTextbausteine: DbHopeKurseTextbausteineService;

  security: SecurityService;
  bolEditorLaden: any;
  bolEditorAenderungen: any;
  dsoTextbausteine: any;
  strTextbausteinHTML: any;
  onDirtyEditor: any;
  dsoVerlauf: any;
  dsoBenutzer: any;
  parameters: any;

  constructor(private injector: Injector) {
  }

  ngOnInit() {
    this.notificationService = this.injector.get(NotificationService);

    this.configService = this.injector.get(ConfigService);

    this.dialogService = this.injector.get(DialogService);

    this.dialogRef = this.injector.get(DialogRef, null);

    this.locale = this.injector.get(LOCALE_ID);

    this.router = this.injector.get(Router);

    this.cd = this.injector.get(ChangeDetectorRef);

    this._location = this.injector.get(Location);

    this.route = this.injector.get(ActivatedRoute);

    this.httpClient = this.injector.get(HttpClient);

    this.dbHopeKurseTextbausteine = this.injector.get(DbHopeKurseTextbausteineService);
    this.security = this.injector.get(SecurityService);
  }

  ngAfterViewInit() {
    this._subscription = this.route.params.subscribe(parameters => {
      if (this.dialogRef) {
        this.parameters = this.injector.get(DIALOG_PARAMETERS);
      } else {
        this.parameters = parameters;
      }
      this.load();
      this.cd.detectChanges();
    });
  }

  ngOnDestroy() {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
  }


  load() {
    this.bolEditorLaden = false;

    this.bolEditorAenderungen = false;

    this.dbHopeKurseTextbausteine.getIbsiTextbausteineByTextbausteinNr(null, this.parameters.TextbausteinNr)
    .subscribe((result: any) => {
      this.dsoTextbausteine = result;

      this.strTextbausteinHTML = result.TextbausteinHTML;

      this.bolEditorLaden = true;
    }, (result: any) => {

    });

    this.onDirtyEditor = () => {     

  this.bolEditorAenderungen = true;

};

    this.dsoVerlauf = {BenutzerID: '', Am: '', TextbausteinNr: ''};

    this.dbHopeKurseTextbausteine.getBenutzers(`BenutzerName eq '${this.security.user.name}'`, null, null, null, null, null, null, null)
    .subscribe((result: any) => {
      this.dsoBenutzer = result.value[0];
    }, (result: any) => {

    });
  }

  buttonKopierenClick(event: any) {
      // Create container for the HTML
  // [1]
  var container = document.createElement('div')
  container.innerHTML = this.strTextbausteinHTML

  // Hide element
  // [2]
  container.style.position = 'fixed'
  container.style.pointerEvents = 'none'
  container.style.opacity = '0'
  container.style.background = 'white'

  // Mount the container to the DOM to make `contentWindow` available
  // [3]
  document.body.appendChild(container)

  // Copy to clipboard
  // [4]
  window.getSelection().removeAllRanges()

  var range = document.createRange()
  range.selectNode(container)
  window.getSelection().addRange(range)

  // [5]
  document.execCommand('copy')
  
  // Remove the container
  // [6]
  document.body.removeChild(container)

    this.notificationService.notify({ severity: "success", summary: ``, detail: `Text wurde kopiert` });
  }

  buttonSpeichernClick(event: any) {
    this.dsoTextbausteine.TextbausteinHTML = this.strTextbausteinHTML

    this.dbHopeKurseTextbausteine.updateIbsiTextbausteine(null, this.dsoTextbausteine.TextbausteinNr, this.dsoTextbausteine)
    .subscribe((result: any) => {
      this.notificationService.notify({ severity: "success", summary: ``, detail: `Textbaustein gespeichert` });

      var date = new Date();

this.dsoVerlauf.Am = new Date(Date.UTC(date.getFullYear(),
                                         date.getMonth(),
                                         date.getDate(),
                                         date.getHours(),
                                         date.getMinutes(),
                                         date.getSeconds(),
                                         date.getMilliseconds() ))

this.dsoVerlauf.BenutzerID = this.dsoBenutzer.BenutzerID;
this.dsoVerlauf.TextbausteinNr = this.dsoTextbausteine.TextbausteinNr;

console.log(this.dsoVerlauf);

      this.dbHopeKurseTextbausteine.createBenutzerTextbausteineVerlauf(null, this.dsoVerlauf)
      .subscribe((result: any) => {
        this.dialogRef.close(result);
      }, (result: any) => {
        this.dialogRef.close(result);
      });
    }, (result: any) => {
      this.notificationService.notify({ severity: "error", summary: ``, detail: `Textbaustein konnte nicht gespeichert werden!` });
    });
  }

  button1Click(event: any) {
    if (this.bolEditorAenderungen == false) {
      if (this.dialogRef) {
        this.dialogRef.close();
      } else {
        this._location.back();
      }
    }

    if (this.bolEditorAenderungen == true) {
      this.dialogService.open(MeldungJaNeinComponent, { parameters: {strMeldung: 'Der Text wurde geändert! Soll die Bearbeitung wirklich abgebrochen werden?'}, title: `Text geändert` })
          .afterClosed().subscribe(result => {
                  if (result == 'Ja') {
          if (this.dialogRef) {
            this.dialogRef.close();
          } else {
            this._location.back();
          }
        }
      });
    }
  }
}
