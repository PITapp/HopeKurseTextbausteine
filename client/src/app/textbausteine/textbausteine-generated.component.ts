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
import { ListBoxComponent } from '@radzen/angular/dist/listbox';
import { LabelComponent } from '@radzen/angular/dist/label';
import { DropDownComponent } from '@radzen/angular/dist/dropdown';
import { TextBoxComponent } from '@radzen/angular/dist/textbox';
import { NumericComponent } from '@radzen/angular/dist/numeric';
import { ButtonComponent } from '@radzen/angular/dist/button';
import { GridComponent } from '@radzen/angular/dist/grid';
import { HtmlComponent } from '@radzen/angular/dist/html';

import { ConfigService } from '../config.service';
import { MeldungLoeschenComponent } from '../meldung-loeschen/meldung-loeschen.component';
import { TextbausteineFelderAuswahlComponent } from '../textbausteine-felder-auswahl/textbausteine-felder-auswahl.component';
import { TextbausteineBearbeitenComponent } from '../textbausteine-bearbeiten/textbausteine-bearbeiten.component';
import { TextbausteineDuplizierenComponent } from '../textbausteine-duplizieren/textbausteine-duplizieren.component';
import { TextbausteineNeuComponent } from '../textbausteine-neu/textbausteine-neu.component';

import { DbHopeKurseTextbausteineService } from '../db-hope-kurse-textbausteine.service';
import { SecurityService } from '../security.service';

export class TextbausteineGenerated implements AfterViewInit, OnInit, OnDestroy {
  // Components
  @ViewChild('content1') content1: ContentComponent;
  @ViewChild('heading0') heading0: HeadingComponent;
  @ViewChild('heading1') heading1: HeadingComponent;
  @ViewChild('heading2') heading2: HeadingComponent;
  @ViewChild('tabs0') tabs0: TabsComponent;
  @ViewChild('panel0') panel0: PanelComponent;
  @ViewChild('filterTextbausteinArtCode') filterTextbausteinArtCode: ListBoxComponent;
  @ViewChild('label4') label4: LabelComponent;
  @ViewChild('filterKursNr') filterKursNr: DropDownComponent;
  @ViewChild('label0') label0: LabelComponent;
  @ViewChild('textboxTitelUndText') textboxTitelUndText: TextBoxComponent;
  @ViewChild('label6') label6: LabelComponent;
  @ViewChild('dropdown4') dropdown4: DropDownComponent;
  @ViewChild('label1') label1: LabelComponent;
  @ViewChild('numeric0') numeric0: NumericComponent;
  @ViewChild('label5') label5: LabelComponent;
  @ViewChild('dropdown0') dropdown0: DropDownComponent;
  @ViewChild('label3') label3: LabelComponent;
  @ViewChild('dropdown1') dropdown1: DropDownComponent;
  @ViewChild('label2') label2: LabelComponent;
  @ViewChild('textbox0') textbox0: TextBoxComponent;
  @ViewChild('button7') button7: ButtonComponent;
  @ViewChild('panel4') panel4: PanelComponent;
  @ViewChild('gridTextbausteine') gridTextbausteine: GridComponent;
  @ViewChild('buttonNeu') buttonNeu: ButtonComponent;
  @ViewChild('buttonDuplizieren') buttonDuplizieren: ButtonComponent;
  @ViewChild('buttonBearbeiten') buttonBearbeiten: ButtonComponent;
  @ViewChild('buttonLoeschen') buttonLoeschen: ButtonComponent;
  @ViewChild('panel6') panel6: PanelComponent;
  @ViewChild('htmlEditorTextbausteine') htmlEditorTextbausteine: HtmlComponent;
  @ViewChild('buttonSpeichern') buttonSpeichern: ButtonComponent;
  @ViewChild('buttonFavorit') buttonFavorit: ButtonComponent;
  @ViewChild('buttonFelder') buttonFelder: ButtonComponent;
  @ViewChild('buttonMischen') buttonMischen: ButtonComponent;
  @ViewChild('buttonDokument') buttonDokument: ButtonComponent;
  @ViewChild('buttonKopieren') buttonKopieren: ButtonComponent;
  @ViewChild('panel2') panel2: PanelComponent;
  @ViewChild('gridFavoriten') gridFavoriten: GridComponent;
  @ViewChild('buttonFavoritEntfernen') buttonFavoritEntfernen: ButtonComponent;
  @ViewChild('panel3') panel3: PanelComponent;
  @ViewChild('htmlEditorTextbausteineFavoriten') htmlEditorTextbausteineFavoriten: HtmlComponent;
  @ViewChild('buttonFavoritenMischen') buttonFavoritenMischen: ButtonComponent;
  @ViewChild('buttonFavoritenDokument') buttonFavoritenDokument: ButtonComponent;
  @ViewChild('buttonFavoritenKopieren') buttonFavoritenKopieren: ButtonComponent;

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
  dsoFavoriten: any;
  parameters: any;
  letzteTextbausteinNr: any;
  rstTextbausteine: any;
  rstTextbausteineCount: any;
  strTextbausteinHTML: any;
  dsoTextbausteine: any;
  rstFavoriten: any;
  rstFavoritenCount: any;
  strTextbausteinHTMLFavoriten: any;
  dsoBenutzerTextbausteineFavoriten: any;

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
    }, (result: any) => {

    });

    this.dsoFavoriten = {BenutzerID: '', Am: '', TextbausteinNr: ''};
  }

  filterTextbausteinArtCodeChange(event: any) {
    this.dbHopeKurseTextbausteine.updateBenutzer(null, this.dsoBenutzer.BenutzerID, this.dsoBenutzer)
    .subscribe((result: any) => {

    }, (result: any) => {

    });
  }

  filterKursNrChange(event: any) {
    this.dbHopeKurseTextbausteine.updateBenutzer(null, this.dsoBenutzer.BenutzerID, this.dsoBenutzer)
    .subscribe((result: any) => {

    }, (result: any) => {

    });
  }

  textboxTitelUndTextChange(event: any) {
    this.dbHopeKurseTextbausteine.updateBenutzer(null, this.dsoBenutzer.BenutzerID, this.dsoBenutzer)
    .subscribe((result: any) => {

    }, (result: any) => {

    });
  }

  dropdown4Change(event: any) {
    this.dbHopeKurseTextbausteine.updateBenutzer(null, this.dsoBenutzer.BenutzerID, this.dsoBenutzer)
    .subscribe((result: any) => {

    }, (result: any) => {

    });
  }

  numeric0Change(event: any) {
    this.dbHopeKurseTextbausteine.updateBenutzer(null, this.dsoBenutzer.BenutzerID, this.dsoBenutzer)
    .subscribe((result: any) => {

    }, (result: any) => {

    });
  }

  dropdown0Change(event: any) {
    this.dbHopeKurseTextbausteine.updateBenutzer(null, this.dsoBenutzer.BenutzerID, this.dsoBenutzer)
    .subscribe((result: any) => {

    }, (result: any) => {

    });
  }

  dropdown1Change(event: any) {
    this.dbHopeKurseTextbausteine.updateBenutzer(null, this.dsoBenutzer.BenutzerID, this.dsoBenutzer)
    .subscribe((result: any) => {

    }, (result: any) => {

    });
  }

  textbox0Change(event: any) {
    this.dbHopeKurseTextbausteine.updateBenutzer(null, this.dsoBenutzer.BenutzerID, this.dsoBenutzer)
    .subscribe((result: any) => {

    }, (result: any) => {

    });
  }

  button7Click(event: any) {
    Promise.resolve().then(() => {
      this.dsoBenutzer.FilterTextbausteinArtCode = null
this.dsoBenutzer.FilterKursNr = null
this.dsoBenutzer.FilterTitelUndText = null
this.dsoBenutzer.FilterAutorNr = null
this.dsoBenutzer.FilterThemaNummer = null
this.dsoBenutzer.FilterAnrede = null
this.dsoBenutzer.FilterDokument = null
this.dsoBenutzer.FilterInfo = null
    }).then((result: any) => {
      this.dbHopeKurseTextbausteine.updateBenutzer(null, this.dsoBenutzer.BenutzerID, this.dsoBenutzer)
      .subscribe((result: any) => {

      }, (result: any) => {

      });
    }, (result: any) => {

    });
  }

  gridTextbausteineLoadData(event: any) {
    this.dbHopeKurseTextbausteine.getIbsiTextbausteines(`${this.dsoBenutzer.FilterTextbausteinArtCode ? 'TextbausteinArtCode eq \'' + this.dsoBenutzer.FilterTextbausteinArtCode + '\'' : 'TextbausteinArtCode ne null'} 
${this.dsoBenutzer.FilterKursNr ? ' and KursNr eq ' + this.dsoBenutzer.FilterKursNr : ''} 
${this.dsoBenutzer.FilterTitelUndText ? ' and ( contains(tolower(TitelTextbaustein),tolower(\'' + this.dsoBenutzer.FilterTitelUndText + '\')) OR contains(tolower(TextbausteinHTML),tolower(\'' + this.dsoBenutzer.FilterTitelUndText + '\')) )' : ''} 
${this.dsoBenutzer.FilterAutorNr ? ' and AutorNr eq ' + this.dsoBenutzer.FilterAutorNr : ''}
${this.dsoBenutzer.FilterThemaNummer ? ' and ThemaNummer eq ' + this.dsoBenutzer.FilterThemaNummer : ''}
${this.dsoBenutzer.FilterAnrede ? ' and Anrede eq \'' + this.dsoBenutzer.FilterAnrede + '\'' : ''}
${this.dsoBenutzer.FilterDokument == 'MitDokument' ? ' and length(DokumentTitel) gt 0' : ''}
${this.dsoBenutzer.FilterDokument == 'OhneDokument' ? ' and length(DokumentTitel) eq null' : ''}
${this.dsoBenutzer.FilterInfo ? ' and contains(tolower(InfoText),tolower(\'' + this.dsoBenutzer.FilterInfo + '\'))' : ''} `, event.top, event.skip, `${event.orderby || 'TitelTextbaustein'}`, event.top != null && event.skip != null, `IBSITextbausteineAutoren, IBSIKurse`, null, null)
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
    this.gridTextbausteine.onSelect(this.rstTextbausteine[0]);
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

    this.dialogService.open(TextbausteineNeuComponent, { parameters: {}, title: `Neuer Textbaustein` })
        .afterClosed().subscribe(result => {
              if (result != null) {
            this.letzteTextbausteinNr = result.TextbausteinNr;
      }

      if (result != null) {
        this.gridTextbausteine.load();
      }
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

        if (result != null) {
          this.gridTextbausteine.load();
        }
      });
    }
  }

  buttonBearbeitenClick(event: any) {
    this.letzteTextbausteinNr = this.dsoTextbausteine.TextbausteinNr;

    this.dialogService.open(TextbausteineBearbeitenComponent, { parameters: {TextbausteinNr: this.dsoTextbausteine.TextbausteinNr}, title: `Bearbeiten Textbaustein` });
  }

  buttonLoeschenClick(event: any) {
    this.letzteTextbausteinNr = null;

    this.dialogService.open(MeldungLoeschenComponent, { parameters: {strMeldung: "Soll der Textbaustein '" + this.dsoTextbausteine.TitelTextbaustein + "' gelöscht werden?"}, title: `Löschen Textbaustein` })
        .afterClosed().subscribe(result => {
              if (result == 'Löschen') {
              this.dbHopeKurseTextbausteine.deleteIbsiTextbausteine(this.dsoTextbausteine.TextbausteinNr)
        .subscribe((result: any) => {
              this.notificationService.notify({ severity: "success", summary: ``, detail: `Textbaustein gelöscht` });
        }, (result: any) => {
              this.notificationService.notify({ severity: "error", summary: ``, detail: `Textbaustein konnte nicht gelöscht werden!` });
        });
      }
    });
  }

  buttonSpeichernClick(event: any) {
    this.letzteTextbausteinNr = this.dsoTextbausteine.TextbausteinNr;

    this.dsoTextbausteine.TextbausteinHTML = this.strTextbausteinHTML

    this.dbHopeKurseTextbausteine.updateIbsiTextbausteine(null, this.dsoTextbausteine.TextbausteinNr, this.dsoTextbausteine)
    .subscribe((result: any) => {
      this.notificationService.notify({ severity: "success", summary: ``, detail: `Textbaustein gespeichert` });
    }, (result: any) => {
      this.notificationService.notify({ severity: "error", summary: ``, detail: `Textbaustein konnte nicht gespeichert werden!` });
    });
  }

  buttonFavoritClick(event: any) {
    this.letzteTextbausteinNr = this.dsoTextbausteine.TextbausteinNr;

    Promise.resolve().then(() => {
      this.dsoFavoriten.BenutzerID = this.dsoBenutzer.BenutzerID;
this.dsoFavoriten.Am = new Date().toISOString();
this.dsoFavoriten.TextbausteinNr = this.dsoTextbausteine.TextbausteinNr;
    }).then((result: any) => {
      this.dbHopeKurseTextbausteine.createBenutzerTextbausteineFavoriten(null, this.dsoFavoriten)
      .subscribe((result: any) => {
        this.gridFavoriten.load();

        this.notificationService.notify({ severity: "success", summary: ``, detail: `Textbaustein als Favorit markiert` });
      }, (result: any) => {
        this.notificationService.notify({ severity: "info", summary: ``, detail: `Textbaustein ist schon als Favorit markiert` });
      });
    }, (result: any) => {

    });
  }

  buttonFelderClick(event: any) {
    this.dialogService.open(TextbausteineFelderAuswahlComponent, { parameters: {}, title: `Auswahl Feld` });
  }

  buttonMischenClick(event: any) {
    this.notificationService.notify({ severity: "warn", summary: ``, detail: `Diese Funktion ist in Arbeit` });
  }

  buttonDokumentClick(event: any) {
    this.notificationService.notify({ severity: "warn", summary: ``, detail: `Diese Funktion ist in Arbeit` });
  }

  buttonKopierenClick(event: any) {
    var textArea = document.createElement("textarea");
textArea.value = this.dsoTextbausteine.TextbausteinHTML;
document.body.appendChild(textArea);
textArea.focus();
textArea.select();

try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Copying text command was ' + msg);
} catch (err) {
    console.log('Oops, unable to copy');
}

document.body.removeChild(textArea);
  }

  gridFavoritenLoadData(event: any) {
    this.dbHopeKurseTextbausteine.getVwBenutzerTextbausteineFavoritens(null, event.top, event.skip, null, event.top != null && event.skip != null, null, null, null)
    .subscribe((result: any) => {
      this.rstFavoriten = result.value;

      this.rstFavoritenCount = event.top != null && event.skip != null ? result['@odata.count'] : result.value.length;

      this.gridFavoriten.onSelect(this.rstFavoriten[0]);
    }, (result: any) => {

    });
  }

  gridFavoritenRowSelect(event: any) {
    this.strTextbausteinHTMLFavoriten = event.TextbausteinHTML;

    this.dsoBenutzerTextbausteineFavoriten = event;
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

  buttonFavoritenMischenClick(event: any) {
    this.notificationService.notify({ severity: "warn", summary: ``, detail: `Diese Funktion ist in Arbeit` });
  }

  buttonFavoritenDokumentClick(event: any) {
    this.notificationService.notify({ severity: "warn", summary: ``, detail: `Diese Funktion ist in Arbeit` });
  }
}
