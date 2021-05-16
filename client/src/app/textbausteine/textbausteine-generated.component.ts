/*
  This file is automatically generated. Any changes will be overwritten.
  Modify textbausteine.component.ts instead.
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
import { LabelComponent } from '@radzen/angular/dist/label';
import { TextBoxComponent } from '@radzen/angular/dist/textbox';
import { ListBoxComponent } from '@radzen/angular/dist/listbox';
import { DropDownComponent } from '@radzen/angular/dist/dropdown';
import { NumericComponent } from '@radzen/angular/dist/numeric';
import { ButtonComponent } from '@radzen/angular/dist/button';
import { GridComponent } from '@radzen/angular/dist/grid';
import { HtmlComponent } from '@radzen/angular/dist/html';

import { ConfigService } from '../config.service';
import { TextbausteineDokumenteComponent } from '../textbausteine-dokumente/textbausteine-dokumente.component';
import { MeldungLoeschenComponent } from '../meldung-loeschen/meldung-loeschen.component';
import { TextbausteineBearbeitenComponent } from '../textbausteine-bearbeiten/textbausteine-bearbeiten.component';
import { TextbausteineInfoComponent } from '../textbausteine-info/textbausteine-info.component';
import { TextbausteineDuplizierenComponent } from '../textbausteine-duplizieren/textbausteine-duplizieren.component';
import { TextbausteineNeuComponent } from '../textbausteine-neu/textbausteine-neu.component';
import { TextbausteineFilterInfoComponent } from '../textbausteine-filter-info/textbausteine-filter-info.component';

import { DbHopeKurseTextbausteineService } from '../db-hope-kurse-textbausteine.service';
import { SecurityService } from '../security.service';

export class TextbausteineGenerated implements AfterViewInit, OnInit, OnDestroy {
  // Components
  @ViewChild('content1') content1: ContentComponent;
  @ViewChild('heading0') heading0: HeadingComponent;
  @ViewChild('heading1') heading1: HeadingComponent;
  @ViewChild('heading2') heading2: HeadingComponent;
  @ViewChild('tabsTextbausteine') tabsTextbausteine: TabsComponent;
  @ViewChild('panel0') panel0: PanelComponent;
  @ViewChild('label0') label0: LabelComponent;
  @ViewChild('textboxTitelUndText') textboxTitelUndText: TextBoxComponent;
  @ViewChild('label7') label7: LabelComponent;
  @ViewChild('filterTextbausteinArtCode') filterTextbausteinArtCode: ListBoxComponent;
  @ViewChild('label4') label4: LabelComponent;
  @ViewChild('filterKursNr') filterKursNr: DropDownComponent;
  @ViewChild('label6') label6: LabelComponent;
  @ViewChild('dropdown4') dropdown4: DropDownComponent;
  @ViewChild('label1') label1: LabelComponent;
  @ViewChild('numeric0') numeric0: NumericComponent;
  @ViewChild('label5') label5: LabelComponent;
  @ViewChild('dropdown0') dropdown0: DropDownComponent;
  @ViewChild('label3') label3: LabelComponent;
  @ViewChild('dropdown1') dropdown1: DropDownComponent;
  @ViewChild('buttonFilterInfo') buttonFilterInfo: ButtonComponent;
  @ViewChild('buttonFilterLoeschen') buttonFilterLoeschen: ButtonComponent;
  @ViewChild('panel4') panel4: PanelComponent;
  @ViewChild('gridTextbausteine') gridTextbausteine: GridComponent;
  @ViewChild('buttonNeu') buttonNeu: ButtonComponent;
  @ViewChild('buttonDuplizieren') buttonDuplizieren: ButtonComponent;
  @ViewChild('buttonBearbeiten') buttonBearbeiten: ButtonComponent;
  @ViewChild('buttonLoeschen') buttonLoeschen: ButtonComponent;
  @ViewChild('panel6') panel6: PanelComponent;
  @ViewChild('htmlEditorTextbausteine') htmlEditorTextbausteine: HtmlComponent;
  @ViewChild('buttonKopieren') buttonKopieren: ButtonComponent;
  @ViewChild('buttonFavorit') buttonFavorit: ButtonComponent;
  @ViewChild('buttonDokument') buttonDokument: ButtonComponent;
  @ViewChild('buttonSpeichern') buttonSpeichern: ButtonComponent;
  @ViewChild('panel2') panel2: PanelComponent;
  @ViewChild('gridFavoriten') gridFavoriten: GridComponent;
  @ViewChild('button0') button0: ButtonComponent;
  @ViewChild('buttonFavoritEntfernen') buttonFavoritEntfernen: ButtonComponent;
  @ViewChild('panel3') panel3: PanelComponent;
  @ViewChild('htmlEditorTextbausteineFavoriten') htmlEditorTextbausteineFavoriten: HtmlComponent;
  @ViewChild('buttonFavoritenKopieren') buttonFavoritenKopieren: ButtonComponent;
  @ViewChild('buttonFavoritenDokument') buttonFavoritenDokument: ButtonComponent;
  @ViewChild('panel1') panel1: PanelComponent;
  @ViewChild('gridVerlauf') gridVerlauf: GridComponent;
  @ViewChild('button1') button1: ButtonComponent;
  @ViewChild('buttonVerlaufEntfernen') buttonVerlaufEntfernen: ButtonComponent;
  @ViewChild('panel5') panel5: PanelComponent;
  @ViewChild('html0') html0: HtmlComponent;
  @ViewChild('buttonVerlaufKopieren') buttonVerlaufKopieren: ButtonComponent;
  @ViewChild('buttonVerlaufDokument') buttonVerlaufDokument: ButtonComponent;
  @ViewChild('panel8') panel8: PanelComponent;
  @ViewChild('gridTextbausteinePapierkorb') gridTextbausteinePapierkorb: GridComponent;
  @ViewChild('buttonPapierkorbBearbeiten') buttonPapierkorbBearbeiten: ButtonComponent;
  @ViewChild('buttonPapierkorbLoeschen') buttonPapierkorbLoeschen: ButtonComponent;
  @ViewChild('panel9') panel9: PanelComponent;
  @ViewChild('html1') html1: HtmlComponent;
  @ViewChild('buttonPapierkorbDokument') buttonPapierkorbDokument: ButtonComponent;
  @ViewChild('buttonPapierkorbSpeichern') buttonPapierkorbSpeichern: ButtonComponent;

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
  dsoBenutzer: any;
  rstTextbausteineArten: any;
  rstKurse: any;
  rstAutoren: any;
  valAnreden: any;
  valDokumente: any;
  bolAnzeigenTitelTextbaustein: any;
  dsoFavoriten: any;
  dsoVerlauf: any;
  onKeyEnterFilterText: any;
  onFocusOutFilterText: any;
  parameters: any;
  letzteTextbausteinNr: any;
  strFilterTextbausteine: any;
  rstTextbausteine: any;
  rstTextbausteineCount: any;
  strTextbausteinHTML: any;
  dsoTextbausteine: any;
  rstFavoriten: any;
  rstFavoritenCount: any;
  strTextbausteinHTMLFavoriten: any;
  dsoBenutzerTextbausteineFavoriten: any;
  rstVerlauf: any;
  rstVerlaufCount: any;
  strTextbausteinHTMLVerlauf: any;
  dsoBenutzerTextbausteineVerlauf: any;
  rstTextbausteinePapierkorb: any;
  rstTextbausteinePapierkorbCount: any;
  strTextbausteinPapierkorbHTML: any;
  dsoTextbausteinePapierkorb: any;

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
    this.dbHopeKurseTextbausteine.getBenutzers(`BenutzerName eq '${this.security.user.name}'`, null, null, null, null, null, null, null)
    .subscribe((result: any) => {
      this.dsoBenutzer = result.value[0];
    }, (result: any) => {

    });

    this.dbHopeKurseTextbausteine.getIbsiTextbausteineArtens(null, null, null, `Sortierung`, null, null, null, null)
    .subscribe((result: any) => {
      this.rstTextbausteineArten = result.value;

      this.dbHopeKurseTextbausteine.getIbsiKurses(null, null, null, `Titel`, null, null, null, null)
      .subscribe((result: any) => {
        this.rstKurse = result.value;

        this.dbHopeKurseTextbausteine.getIbsiTextbausteineAutorens(null, null, null, `Name`, null, null, null, null)
        .subscribe((result: any) => {
          this.rstAutoren = result.value;

          this.valAnreden = [{text: 'Du', value: 'Du'}, {text: 'Sie', value: 'Sie'}, {text: 'Ohne', value: 'Ohne'}];

          this.valDokumente = [{text: 'Mit Domument', value: 'MitDokument'}, {text: 'Ohne Dokument', value: 'OhneDokument'}];

          this.gridTextbausteine.load();
        }, (result: any) => {

        });
      }, (result: any) => {

      });
    }, (result: any) => {

    });

    this.gridFavoriten.load();

    this.gridVerlauf.load();

    this.gridTextbausteinePapierkorb.load();

    this.bolAnzeigenTitelTextbaustein = true;

    this.dsoFavoriten = {BenutzerID: '', Am: '', TextbausteinNr: ''};

    this.dsoVerlauf = {BenutzerID: '', Am: '', TextbausteinNr: ''};

    this.onKeyEnterFilterText = () => {
    this.dbHopeKurseTextbausteine.updateBenutzer(null, this.dsoBenutzer.BenutzerID, this.dsoBenutzer)
    .subscribe((result: any) => {

    }, (result: any) => {

    });
    
    this.gridTextbausteine.load();
 };

    this.onFocusOutFilterText = () => {     
    this.dbHopeKurseTextbausteine.updateBenutzer(null, this.dsoBenutzer.BenutzerID, this.dsoBenutzer)
    .subscribe((result: any) => {

    }, (result: any) => {

    });
    
    this.gridTextbausteine.load();
 };
  }

  tabsTextbausteineChange(event: any) {
    switch (event.index) {
  case 0:
    this.bolAnzeigenTitelTextbaustein = true
    break;

  case 1:
    this.bolAnzeigenTitelTextbaustein = false
    break;

  case 2:
    this.bolAnzeigenTitelTextbaustein = false
    break;

  case 3:
    this.bolAnzeigenTitelTextbaustein = false
    break;
}
  }

  filterTextbausteinArtCodeChange(event: any) {
    this.dbHopeKurseTextbausteine.updateBenutzer(null, this.dsoBenutzer.BenutzerID, this.dsoBenutzer)
    .subscribe((result: any) => {

    }, (result: any) => {

    });

    this.gridTextbausteine.load();
  }

  filterKursNrChange(event: any) {
    this.dbHopeKurseTextbausteine.updateBenutzer(null, this.dsoBenutzer.BenutzerID, this.dsoBenutzer)
    .subscribe((result: any) => {

    }, (result: any) => {

    });

    this.gridTextbausteine.load();
  }

  dropdown4Change(event: any) {
    this.dbHopeKurseTextbausteine.updateBenutzer(null, this.dsoBenutzer.BenutzerID, this.dsoBenutzer)
    .subscribe((result: any) => {

    }, (result: any) => {

    });

    this.gridTextbausteine.load();
  }

  numeric0Change(event: any) {
    this.dbHopeKurseTextbausteine.updateBenutzer(null, this.dsoBenutzer.BenutzerID, this.dsoBenutzer)
    .subscribe((result: any) => {

    }, (result: any) => {

    });

    this.gridTextbausteine.load();
  }

  dropdown0Change(event: any) {
    this.dbHopeKurseTextbausteine.updateBenutzer(null, this.dsoBenutzer.BenutzerID, this.dsoBenutzer)
    .subscribe((result: any) => {

    }, (result: any) => {

    });

    this.gridTextbausteine.load();
  }

  dropdown1Change(event: any) {
    this.dbHopeKurseTextbausteine.updateBenutzer(null, this.dsoBenutzer.BenutzerID, null)
    .subscribe((result: any) => {

    }, (result: any) => {

    });

    this.gridTextbausteine.load();
  }

  buttonFilterInfoClick(event: any) {
    this.dialogService.open(TextbausteineFilterInfoComponent, { parameters: {}, title: `Info Filter` });
  }

  buttonFilterLoeschenClick(event: any) {
    this.dsoBenutzer.FilterTextbausteinArtCode = null
this.dsoBenutzer.FilterKursNr = null
this.dsoBenutzer.FilterTitelUndText = null
this.dsoBenutzer.FilterAutorNr = null
this.dsoBenutzer.FilterThemaNummer = null
this.dsoBenutzer.FilterAnrede = null
this.dsoBenutzer.FilterDokument = null

    this.dbHopeKurseTextbausteine.updateBenutzer(null, this.dsoBenutzer.BenutzerID, this.dsoBenutzer)
    .subscribe((result: any) => {

    }, (result: any) => {

    });

    this.gridTextbausteine.load();
  }

  gridTextbausteineLoadData(event: any) {
    this.strFilterTextbausteine = '';

    if (this.dsoBenutzer.FilterTextbausteinArtCode) {
      this.strFilterTextbausteine = this.strFilterTextbausteine + 'TextbausteinArtCode eq \'' + this.dsoBenutzer.FilterTextbausteinArtCode + '\''
    } else {
      this.strFilterTextbausteine = this.strFilterTextbausteine + 'TextbausteinArtCode ne null'
    }

    if (this.dsoBenutzer.FilterTitelUndText) {
      var strFilterTitelUndText = this.dsoBenutzer.FilterTitelUndText.toLowerCase();

      if (strFilterTitelUndText.indexOf('"') == -1) {
        // Keine Anführungszeichen gefunden
        var strFilterTitelUndTextSplit = strFilterTitelUndText.split(" ");
        console.log("strFilterTitelUndTextSplit=", strFilterTitelUndTextSplit);

        // AND und Klammer öffnen
        this.strFilterTextbausteine = this.strFilterTextbausteine + ' and ( '

        for (var i = 0; i < strFilterTitelUndTextSplit.length; i++) {
          console.log(i, '=', strFilterTitelUndTextSplit[i]);
          this.strFilterTextbausteine = this.strFilterTextbausteine + 'contains(tolower(TitelTextbaustein),\'' + strFilterTitelUndTextSplit[i] + '\') OR contains(tolower(UntertitelTextbaustein),\'' + strFilterTitelUndTextSplit[i] + '\') OR contains(tolower(TextbausteinHTML),\'' + strFilterTitelUndTextSplit[i] + '\') OR contains(tolower(InfoText),\'' + strFilterTitelUndTextSplit[i] + '\')';
          this.strFilterTextbausteine = this.strFilterTextbausteine + ' OR '
        }

        // Letztes OR entfernen
        this.strFilterTextbausteine = this.strFilterTextbausteine.substring(0, this.strFilterTextbausteine.length - 4);

        // Klammer schließen
        this.strFilterTextbausteine = this.strFilterTextbausteine + ' ) '

        console.log(this.strFilterTextbausteine);

      } else {
        // Anführungszeichen gefunden
        strFilterTitelUndText = strFilterTitelUndText.replace(/"/g, '');
        console.log("strFilterTitelUndText=", strFilterTitelUndText);

        this.strFilterTextbausteine = this.strFilterTextbausteine + ' and ( contains(tolower(TitelTextbaustein),\'' + strFilterTitelUndText + '\') OR contains(tolower(UntertitelTextbaustein),\'' + strFilterTitelUndText + '\') OR contains(tolower(TextbausteinHTML),\'' + strFilterTitelUndText + '\') OR contains(tolower(InfoText),\'' + strFilterTitelUndText + '\') )';
      }
    }

    if (this.dsoBenutzer.FilterKursNr) {
      this.strFilterTextbausteine = this.strFilterTextbausteine + ' and KursNr eq ' + this.dsoBenutzer.FilterKursNr
    }

    if (this.dsoBenutzer.FilterAutorNr) {
      this.strFilterTextbausteine = this.strFilterTextbausteine + ' and AutorNr eq ' + this.dsoBenutzer.FilterAutorNr
    }

    if (this.dsoBenutzer.FilterThemaNummer) {
      this.strFilterTextbausteine = this.strFilterTextbausteine + ' and ThemaNummer eq ' + this.dsoBenutzer.FilterThemaNummer
    }

    if (this.dsoBenutzer.FilterAnrede) {
      this.strFilterTextbausteine = this.strFilterTextbausteine + ' and Anrede eq \'' + this.dsoBenutzer.FilterAnrede + '\''
    }

    if (this.dsoBenutzer.FilterDokument == 'MitDokument') {
      this.strFilterTextbausteine = this.strFilterTextbausteine + ' and length(DokumentTitel) gt 0'
    }

    if (this.dsoBenutzer.FilterDokument == 'OhneDokument') {
      this.strFilterTextbausteine = this.strFilterTextbausteine + ' and length(DokumentTitel) eq null'
    }

    this.dbHopeKurseTextbausteine.getIbsiTextbausteines(`${this.strFilterTextbausteine} and Ordner ne 'Papierkorb'`, event.top, event.skip, `${event.orderby || 'TitelTextbaustein'}`, event.top != null && event.skip != null, `IBSITextbausteineAutoren, IBSIKurse`, null, null)
    .subscribe((result: any) => {
      this.rstTextbausteine = result.value;

      this.rstTextbausteineCount = event.top != null && event.skip != null ? result['@odata.count'] : result.value.length;

      if (this.rstTextbausteine.find(p => p.TextbausteinNr == this.letzteTextbausteinNr) != null) {
    // letzteTextbausteinNr wurde in rstTextbausteine gefunden
    this.gridTextbausteine.onSelect(this.rstTextbausteine.find(p => p.TextbausteinNr == this.letzteTextbausteinNr));
} else {
    // letzteTextbausteinNr wurde in rstTextbausteine NICHT gefunden
    this.letzteTextbausteinNr = null;
    this.strTextbausteinHTML = null;
    this.dsoTextbausteine = null;
}
    }, (result: any) => {

    });
  }

  gridTextbausteineRowDoubleClick(event: any) {
    this.letzteTextbausteinNr = this.dsoTextbausteine.TextbausteinNr;

    this.dialogService.open(TextbausteineBearbeitenComponent, { parameters: {TextbausteinNr: this.dsoTextbausteine.TextbausteinNr}, title: `Bearbeiten Textbaustein` });
  }

  gridTextbausteineRowSelect(event: any) {
    this.strTextbausteinHTML = event.TextbausteinHTML;

    this.dsoTextbausteine = event;
  }

  buttonNeuClick(event: any) {
    if (this.dsoTextbausteine != null) {
        this.letzteTextbausteinNr = this.dsoTextbausteine.TextbausteinNr;
    }

    this.dialogService.open(TextbausteineNeuComponent, { parameters: {FilterTextbausteinArtCode: this.dsoBenutzer.FilterTextbausteinArtCode}, title: `Neuer Textbaustein` })
        .afterClosed().subscribe(result => {
              if (result != null) {
            this.letzteTextbausteinNr = result.TextbausteinNr;
      }

      this.dsoBenutzer.FilterTextbausteinArtCode = result.TextbausteinArtCode
this.dsoBenutzer.FilterKursNr = result.KursNr
this.dsoBenutzer.FilterTitelUndText = result.TitelTextbaustein
this.dsoBenutzer.FilterAutorNr = result.AutorNr
this.dsoBenutzer.FilterThemaNummer = result.ThemaNummer
this.dsoBenutzer.FilterAnrede = result.Anrede
this.dsoBenutzer.FilterDokument = null

      if (result != null) {
        this.gridTextbausteine.load();
      }

      this.dbHopeKurseTextbausteine.updateBenutzer(null, this.dsoBenutzer.BenutzerID, this.dsoBenutzer)
      .subscribe((result: any) => {

      }, (result: any) => {

      });
    });
  }

  buttonDuplizierenClick(event: any) {
    if (this.dsoTextbausteine != null) {
        this.letzteTextbausteinNr = this.dsoTextbausteine.TextbausteinNr;
    }

    if (this.dsoTextbausteine != null) {
      this.dialogService.open(TextbausteineDuplizierenComponent, { parameters: {TextbausteinNr: this.dsoTextbausteine.TextbausteinNr}, title: `Duplizieren Textbaustein` })
          .afterClosed().subscribe(result => {
                  if (result != null) {
                this.letzteTextbausteinNr = result.TextbausteinNr;
        }

        this.dsoBenutzer.FilterTextbausteinArtCode = result.TextbausteinArtCode
this.dsoBenutzer.FilterKursNr = result.KursNr
this.dsoBenutzer.FilterTitelUndText = result.TitelTextbaustein
this.dsoBenutzer.FilterAutorNr = result.AutorNr
this.dsoBenutzer.FilterThemaNummer = result.ThemaNummer
this.dsoBenutzer.FilterAnrede = result.Anrede
this.dsoBenutzer.FilterDokument = null

        if (result != null) {
          this.gridTextbausteine.load();
        }

        this.dbHopeKurseTextbausteine.updateBenutzer(null, this.dsoBenutzer.BenutzerID, this.dsoBenutzer)
        .subscribe((result: any) => {

        }, (result: any) => {

        });
      });
    }
  }

  buttonBearbeitenClick(event: any) {
    this.letzteTextbausteinNr = this.dsoTextbausteine.TextbausteinNr;

    this.dialogService.open(TextbausteineBearbeitenComponent, { parameters: {TextbausteinNr: this.dsoTextbausteine.TextbausteinNr}, title: `Bearbeiten Textbaustein` });
  }

  buttonLoeschenClick(event: any) {
    this.letzteTextbausteinNr = null;

    this.dialogService.open(MeldungLoeschenComponent, { parameters: {strMeldung: "Soll der Textbaustein '" + this.dsoTextbausteine.TitelTextbaustein + "' gelöscht (in den Papierkorb) werden?"}, title: `Löschen Textbaustein` })
        .afterClosed().subscribe(result => {
              if (result == 'Löschen') {
        this.dsoTextbausteine.Ordner = 'Papierkorb'
      }

      if (result == 'Löschen') {
              this.dbHopeKurseTextbausteine.updateIbsiTextbausteine(null, this.dsoTextbausteine.TextbausteinNr, this.dsoTextbausteine)
        .subscribe((result: any) => {
              this.gridTextbausteine.load();

        this.gridTextbausteinePapierkorb.load();

        this.notificationService.notify({ severity: "success", summary: ``, detail: `Textbaustein gelöscht` });
        }, (result: any) => {
              this.notificationService.notify({ severity: "error", summary: ``, detail: `Textbaustein konnte nicht gelöscht werden!` });
        });
      }
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

    this.dbHopeKurseTextbausteine.createBenutzerTextbausteineVerlauf(null, this.dsoVerlauf)
    .subscribe((result: any) => {
      this.gridVerlauf.load();
    }, (result: any) => {

    });
  }

  buttonFavoritClick(event: any) {
    var date = new Date();

this.dsoFavoriten.Am = new Date(Date.UTC(date.getFullYear(),
                                         date.getMonth(),
                                         date.getDate(),
                                         date.getHours(),
                                         date.getMinutes(),
                                         date.getSeconds(),
                                         date.getMilliseconds() ))

this.dsoFavoriten.BenutzerID = this.dsoBenutzer.BenutzerID;
this.dsoFavoriten.TextbausteinNr = this.dsoTextbausteine.TextbausteinNr;

    this.dbHopeKurseTextbausteine.createBenutzerTextbausteineFavoriten(null, this.dsoFavoriten)
    .subscribe((result: any) => {
      this.notificationService.notify({ severity: "success", summary: ``, detail: `Textbaustein als Favorit markiert` });

      this.gridFavoriten.load();
    }, (result: any) => {
      this.notificationService.notify({ severity: "info", summary: ``, detail: `Textbaustein ist schon Favorit` });
    });
  }

  buttonDokumentClick(event: any) {
    this.dialogService.open(TextbausteineDokumenteComponent, { parameters: {TextbausteinNr: this.dsoTextbausteine.TextbausteinNr}, width: 900, title: `Domument ` });

    this.letzteTextbausteinNr = this.dsoTextbausteine.TextbausteinNr;
  }

  buttonSpeichernClick(event: any) {
    this.letzteTextbausteinNr = this.dsoTextbausteine.TextbausteinNr;

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

      this.dbHopeKurseTextbausteine.createBenutzerTextbausteineVerlauf(null, this.dsoVerlauf)
      .subscribe((result: any) => {
        this.gridVerlauf.load();
      }, (result: any) => {

      });
    }, (result: any) => {
      this.notificationService.notify({ severity: "error", summary: ``, detail: `Textbaustein konnte nicht gespeichert werden!` });
    });
  }

  gridFavoritenLoadData(event: any) {
    this.dbHopeKurseTextbausteine.getVwBenutzerTextbausteineFavoritens(`Benutzername eq '${this.security.user.name}'`, event.top, event.skip, null, event.top != null && event.skip != null, null, null, null)
    .subscribe((result: any) => {
      this.rstFavoriten = result.value;

      this.rstFavoritenCount = event.top != null && event.skip != null ? result['@odata.count'] : result.value.length;

      this.gridFavoriten.onSelect(this.rstFavoriten[0]);

      if (this.rstFavoritenCount == 0) {
            this.strTextbausteinHTMLFavoriten = null;
      }
    }, (result: any) => {

    });
  }

  gridFavoritenRowDoubleClick(event: any) {
    this.dialogService.open(TextbausteineInfoComponent, { parameters: {TextbausteinNr: this.dsoBenutzerTextbausteineFavoriten.TextbausteinNr}, title: `Info Textbaustein` });
  }

  gridFavoritenRowSelect(event: any) {
    this.strTextbausteinHTMLFavoriten = event.TextbausteinHTML;

    this.dsoBenutzerTextbausteineFavoriten = event;
  }

  button0Click(event: any) {
    this.dialogService.open(TextbausteineInfoComponent, { parameters: {TextbausteinNr: this.dsoBenutzerTextbausteineFavoriten.TextbausteinNr}, title: `Info Textbaustein` });
  }

  buttonFavoritEntfernenClick(event: any) {
    this.dialogService.open(MeldungLoeschenComponent, { parameters: {strMeldung: "Soll der Favorit '" + this.dsoBenutzerTextbausteineFavoriten.TitelTextbaustein + "' gelöscht werden?"}, title: `Löschen Favorit` })
        .afterClosed().subscribe(result => {
              if (result == 'Löschen') {
              this.dbHopeKurseTextbausteine.deleteBenutzerTextbausteineFavoriten(this.dsoBenutzerTextbausteineFavoriten.TextbausteineFavoritID)
        .subscribe((result: any) => {
              this.gridFavoriten.load();

        this.notificationService.notify({ severity: "success", summary: ``, detail: `Favorit gelöscht` });
        }, (result: any) => {
              this.notificationService.notify({ severity: "error", summary: ``, detail: `Favorit konnte nicht gelöscht werden!` });
        });
      }
    });
  }

  buttonFavoritenKopierenClick(event: any) {
      // Create container for the HTML
  // [1]
  var container = document.createElement('div')
  container.innerHTML = this.strTextbausteinHTMLFavoriten

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

  buttonFavoritenDokumentClick(event: any) {
    this.dialogService.open(TextbausteineDokumenteComponent, { parameters: {TextbausteinNr: this.dsoBenutzerTextbausteineFavoriten.TextbausteinNr}, width: 900, title: 'TextbausteineDokumente' });
  }

  gridVerlaufLoadData(event: any) {
    this.dbHopeKurseTextbausteine.getVwBenutzerTextbausteineVerlaufs(`Benutzername eq '${this.security.user.name}'`, event.top, event.skip, null, event.top != null && event.skip != null, null, null, null)
    .subscribe((result: any) => {
      this.rstVerlauf = result.value;

      this.rstVerlaufCount = event.top != null && event.skip != null ? result['@odata.count'] : result.value.length;

      this.gridVerlauf.onSelect(this.rstVerlauf[0]);

      if (this.rstVerlaufCount == 0) {
            this.strTextbausteinHTMLVerlauf = null;
      }
    }, (result: any) => {

    });
  }

  gridVerlaufRowDoubleClick(event: any) {
    this.dialogService.open(TextbausteineInfoComponent, { parameters: {TextbausteinNr: this.dsoBenutzerTextbausteineVerlauf.TextbausteinNr}, title: `Info Verlauf` });
  }

  gridVerlaufRowSelect(event: any) {
    this.strTextbausteinHTMLVerlauf = event.TextbausteinHTML;

    this.dsoBenutzerTextbausteineVerlauf = event;
  }

  button1Click(event: any) {
    this.dialogService.open(TextbausteineInfoComponent, { parameters: {TextbausteinNr: this.dsoBenutzerTextbausteineVerlauf.TextbausteinNr}, title: `Info Verlauf` });
  }

  buttonVerlaufEntfernenClick(event: any) {
    this.dialogService.open(MeldungLoeschenComponent, { parameters: {strMeldung: "Soll der Verlauf '" + this.dsoBenutzerTextbausteineVerlauf.TitelTextbaustein + "' gelöscht werden?"}, title: `Löschen Verlauf` })
        .afterClosed().subscribe(result => {
              if (result == 'Löschen') {
              this.dbHopeKurseTextbausteine.deleteBenutzerTextbausteineVerlauf(this.dsoBenutzerTextbausteineVerlauf.TextbausteineVerlaufID)
        .subscribe((result: any) => {
              this.gridVerlauf.load();

        this.notificationService.notify({ severity: "success", summary: ``, detail: `Verlauf gelöscht` });
        }, (result: any) => {
              this.notificationService.notify({ severity: "error", summary: ``, detail: `Verlauf konnte nicht gelöscht werden!` });
        });
      }
    });
  }

  buttonVerlaufKopierenClick(event: any) {
      // Create container for the HTML
  // [1]
  var container = document.createElement('div')
  container.innerHTML = this.strTextbausteinHTMLVerlauf

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

  buttonVerlaufDokumentClick(event: any) {
    this.dialogService.open(TextbausteineDokumenteComponent, { parameters: {TextbausteinNr: this.dsoBenutzerTextbausteineVerlauf.TextbausteinNr}, width: 900, title: 'TextbausteineDokumente' });
  }

  gridTextbausteinePapierkorbLoadData(event: any) {
    this.dbHopeKurseTextbausteine.getIbsiTextbausteines(`Ordner eq 'Papierkorb'`, event.top, event.skip, `${event.orderby || 'TitelTextbaustein'}`, event.top != null && event.skip != null, `IBSITextbausteineAutoren, IBSIKurse`, null, null)
    .subscribe((result: any) => {
      this.rstTextbausteinePapierkorb = result.value;

      this.rstTextbausteinePapierkorbCount = event.top != null && event.skip != null ? result['@odata.count'] : result.value.length;
    }, (result: any) => {

    });
  }

  gridTextbausteinePapierkorbRowDoubleClick(event: any) {
    this.dialogService.open(TextbausteineBearbeitenComponent, { parameters: {TextbausteinNr: this.dsoTextbausteinePapierkorb.TextbausteinNr}, title: `Bearbeiten Textbaustein` });
  }

  gridTextbausteinePapierkorbRowSelect(event: any) {
    this.strTextbausteinPapierkorbHTML = event.TextbausteinHTML;

    this.dsoTextbausteinePapierkorb = event;
  }

  buttonPapierkorbBearbeitenClick(event: any) {
    this.dialogService.open(TextbausteineBearbeitenComponent, { parameters: {TextbausteinNr: this.dsoTextbausteinePapierkorb.TextbausteinNr}, title: `Bearbeiten Textbaustein` });
  }

  buttonPapierkorbLoeschenClick(event: any) {
    this.dialogService.open(MeldungLoeschenComponent, { parameters: {strMeldung: "Soll der Textbaustein '" + this.dsoTextbausteinePapierkorb.TitelTextbaustein + "' entgültig gelöscht werden?"}, title: `Löschen Textbaustein` })
        .afterClosed().subscribe(result => {
              if (result == 'Löschen') {
              this.dbHopeKurseTextbausteine.deleteIbsiTextbausteine(this.dsoTextbausteinePapierkorb.TextbausteinNr)
        .subscribe((result: any) => {
              this.gridTextbausteinePapierkorb.load();

        this.notificationService.notify({ severity: "success", summary: ``, detail: `Textbaustein gelöscht` });
        }, (result: any) => {
              this.notificationService.notify({ severity: "error", summary: ``, detail: `Textbaustein konnte nicht gelöscht werden!` });
        });
      }
    });
  }

  buttonPapierkorbDokumentClick(event: any) {
    this.dialogService.open(TextbausteineDokumenteComponent, { parameters: {TextbausteinNr: this.dsoTextbausteinePapierkorb.TextbausteinNr}, width: 900, title: 'TextbausteineDokumente' });
  }

  buttonPapierkorbSpeichernClick(event: any) {
    this.dsoTextbausteinePapierkorb.TextbausteinHTML = this.strTextbausteinPapierkorbHTML

    this.dbHopeKurseTextbausteine.updateIbsiTextbausteine(null, this.dsoTextbausteinePapierkorb.TextbausteinNr, this.dsoTextbausteinePapierkorb)
    .subscribe((result: any) => {
      this.notificationService.notify({ severity: "success", summary: ``, detail: `Textbaustein gespeichert` });
    }, (result: any) => {
      this.notificationService.notify({ severity: "error", summary: ``, detail: `Textbaustein konnte nicht gespeichert werden!` });
    });
  }
}
