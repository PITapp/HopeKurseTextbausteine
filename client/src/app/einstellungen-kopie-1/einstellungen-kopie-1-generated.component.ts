/*
  This file is automatically generated. Any changes will be overwritten.
  Modify einstellungen-kopie-1.component.ts instead.
*/
import { LOCALE_ID, ChangeDetectorRef, ViewChild, AfterViewInit, Injector, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Subscription } from 'rxjs';

import { DialogService, DIALOG_PARAMETERS, DialogRef } from '@radzen/angular/dist/dialog';
import { NotificationService } from '@radzen/angular/dist/notification';
import { ContentComponent } from '@radzen/angular/dist/content';
import { HeadingComponent } from '@radzen/angular/dist/heading';
import { TabsComponent } from '@radzen/angular/dist/tabs';
import { PanelComponent } from '@radzen/angular/dist/panel';
import { GridComponent } from '@radzen/angular/dist/grid';
import { ButtonComponent } from '@radzen/angular/dist/button';
import { HtmlComponent } from '@radzen/angular/dist/html';

import { ConfigService } from '../config.service';
import { EinstellungenInfotexteEditorComponent } from '../einstellungen-infotexte-editor/einstellungen-infotexte-editor.component';
import { MeldungLoeschenComponent } from '../meldung-loeschen/meldung-loeschen.component';
import { EinstellungenInfotexteBearbeitenComponent } from '../einstellungen-infotexte-bearbeiten/einstellungen-infotexte-bearbeiten.component';
import { EinstellungenInfotexteNeuComponent } from '../einstellungen-infotexte-neu/einstellungen-infotexte-neu.component';

import { DbHopeKurseTextbausteineService } from '../db-hope-kurse-textbausteine.service';
import { SecurityService } from '../security.service';

export class EinstellungenKopie1Generated implements AfterViewInit, OnInit, OnDestroy {
  // Components
  @ViewChild('content1') content1: ContentComponent;
  @ViewChild('heading18') heading18: HeadingComponent;
  @ViewChild('heading19') heading19: HeadingComponent;
  @ViewChild('heading21') heading21: HeadingComponent;
  @ViewChild('heading2') heading2: HeadingComponent;
  @ViewChild('tabs0') tabs0: TabsComponent;
  @ViewChild('panel1') panel1: PanelComponent;
  @ViewChild('gridInfotexte') gridInfotexte: GridComponent;
  @ViewChild('buttonNeuerInfotext') buttonNeuerInfotext: ButtonComponent;
  @ViewChild('buttonBearbeitenInfotext') buttonBearbeitenInfotext: ButtonComponent;
  @ViewChild('buttonLoeschenInfotext') buttonLoeschenInfotext: ButtonComponent;
  @ViewChild('panel0') panel0: PanelComponent;
  @ViewChild('htmlEditorInfotexte') htmlEditorInfotexte: HtmlComponent;
  @ViewChild('buttonBearbeitenInfotextEditor') buttonBearbeitenInfotextEditor: ButtonComponent;
  @ViewChild('buttonSpeichernInfotext') buttonSpeichernInfotext: ButtonComponent;

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
  letzteInfotextID: any;
  strInfotextHTML: any;
  strInfotextHTML_Vergleich: any;
  dsoInfotexteAutoSave: any;
  onFocusInEditor: any;
  onFocusOutEditorInfotexte_Temp: any;
  onFocusOutEditor: any;
  bolInfotextHTMLgeaendert: any;
  onDblclickEditor: any;
  onDirtyEditor: any;
  parameters: any;
  rstInfotexte: any;
  rstInfotexteCount: any;
  strInfotextUrsprungHTML: any;
  dsoInfotexte: any;

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
    this.letzteInfotextID = null;

    this.gridInfotexte.load();

    this.strInfotextHTML = null;

    this.strInfotextHTML_Vergleich = null;

    this.dsoInfotexteAutoSave = {
    "InfotextID": 0,
    "Inhalt": ""
};

    this.onFocusInEditor = () => {     

  console.log('bin drinnen');

};

    this.onFocusOutEditorInfotexte_Temp = () => {     

  console.log('bin draussen');

  if (this.strInfotextHTML != this.strInfotextHTML_Vergleich) {
    
    console.log('bin beim Infotexte speichern', this.dsoInfotexteAutoSave);
    
    this.dsoInfotexteAutoSave.InfotextID = this.dsoInfotexte.InfotextID;
    this.dsoInfotexteAutoSave.Inhalt = this.strInfotextHTML;
    
    console.log('bin beim Infotexte speichern Teil2', this.dsoInfotexteAutoSave);

    this.dbHopeKurseTextbausteine.updateInfotexteHtml(null, this.dsoInfotexteAutoSave.InfotextID, this.dsoInfotexteAutoSave)
    .subscribe((result: any) => {
      
      console.log('Infotexte wurden gespeichert');
      
      this.notificationService.notify({ severity: "success", summary: ``, detail: `Infotext gespeichert` });
    }, (result: any) => {
      this.notificationService.notify({ severity: "error", summary: ``, detail: `Infotext konnten nicht gespeichert werden!` });
    });
  }
};

    this.onFocusOutEditor = () => {     

  console.log('bin draussen');

};

    this.bolInfotextHTMLgeaendert = false;

    this.onDblclickEditor = () => {     

  console.log('das war ein doppel click');

};

    this.onDirtyEditor = () => {     

  console.log('der Editor onDirty');
  
  this.bolInfotextHTMLgeaendert = true;

};
  }

  gridInfotexteLoadData(event: any) {
    this.dbHopeKurseTextbausteine.getInfotexteHtmls(`${event.filter}`, event.top, event.skip, `${event.orderby || 'Titel'}`, event.top != null && event.skip != null, null, null, null)
    .subscribe((result: any) => {
      this.rstInfotexte = result.value;

      this.rstInfotexteCount = event.top != null && event.skip != null ? result['@odata.count'] : result.value.length;

      if (this.rstInfotexte.find(p => p.InfotextID == this.letzteInfotextID) != null) {
    // letzteInfotextID wurde in rstInfotexte gefunden
    this.gridInfotexte.onSelect(this.rstInfotexte.find(p => p.InfotextID == this.letzteInfotextID))
} else {
    // letzteInfotextID wurde in rstInfotexte NICHT gefunden
    this.letzteInfotextID = null;
    this.gridInfotexte.onSelect(this.rstInfotexte[0]);
}

      console.log('Infotexte neu geladen');
    }, (result: any) => {
      this.notificationService.notify({ severity: "error", summary: ``, detail: `Infotexte konnten nicht geladen werden!` });
    });

    console.log('Infotexte laden');
  }

  gridInfotexteRowDoubleClick(event: any) {
    this.letzteInfotextID = this.dsoInfotexte.InfotextID;

    this.dialogService.open(EinstellungenInfotexteBearbeitenComponent, { parameters: {InfotextID: this.dsoInfotexte.InfotextID}, title: `Bearbeiten Infotexte` });
  }

  gridInfotexteRowSelect(event: any) {
    this.strInfotextHTML = event.Inhalt;

    this.strInfotextUrsprungHTML = event.Inhalt;

    this.dsoInfotexte = event;

    console.log('Infotexte RowSelect');

    this.bolInfotextHTMLgeaendert = false;
  }

  buttonNeuerInfotextClick(event: any) {
    this.letzteInfotextID = this.dsoInfotexte.InfotextID;

    this.dialogService.open(EinstellungenInfotexteNeuComponent, { parameters: {}, title: `Neuer Infotext ` })
        .afterClosed().subscribe(result => {
              if (result != null) {
            this.letzteInfotextID = result.InfotextID;
      }

      if (result != null) {
        this.gridInfotexte.load();
      }
    });
  }

  buttonBearbeitenInfotextClick(event: any) {
    this.letzteInfotextID = this.dsoInfotexte.InfotextID;

    this.dialogService.open(EinstellungenInfotexteBearbeitenComponent, { parameters: {InfotextID: this.dsoInfotexte.InfotextID}, title: `Bearbeiten Infotext` });
  }

  buttonLoeschenInfotextClick(event: any) {
    this.letzteInfotextID = null;

    this.dialogService.open(MeldungLoeschenComponent, { parameters: {strMeldung: "Soll der Infotext '" + this.dsoInfotexte.Titel + "' gelöscht werden?"}, title: `Löschen Infotext` })
        .afterClosed().subscribe(result => {
              if (result == 'Löschen') {
              this.dbHopeKurseTextbausteine.deleteInfotexteHtml(this.dsoInfotexte.InfotextID)
        .subscribe((result: any) => {
              this.notificationService.notify({ severity: "success", summary: ``, detail: `Infotext gelöscht` });
        }, (result: any) => {
              this.notificationService.notify({ severity: "error", summary: ``, detail: `Infotext konnte nicht gelöscht werden!` });
        });
      }
    });
  }

  buttonBearbeitenInfotextEditorClick(event: any) {
    this.letzteInfotextID = this.dsoInfotexte.InfotextID;

    this.dialogService.open(EinstellungenInfotexteEditorComponent, { parameters: {InfotextID: this.dsoInfotexte.InfotextID}, width: 720, title: `Bearbeiten` });
  }

  buttonSpeichernInfotextClick(event: any) {
    this.letzteInfotextID = this.dsoInfotexte.InfotextID;

    this.dsoInfotexte.Inhalt = this.strInfotextHTML

    this.dbHopeKurseTextbausteine.updateInfotexteHtml(null, this.dsoInfotexte.InfotextID, this.dsoInfotexte)
    .subscribe((result: any) => {
      this.notificationService.notify({ severity: "success", summary: ``, detail: `Infotext gespeichert` });
    }, (result: any) => {
      this.notificationService.notify({ severity: "error", summary: ``, detail: `Infotext konnten nicht gespeichert werden!` });
    });
  }
}
