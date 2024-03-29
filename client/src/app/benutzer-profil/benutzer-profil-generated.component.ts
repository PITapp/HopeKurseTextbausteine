/*
  This file is automatically generated. Any changes will be overwritten.
  Modify benutzer-profil.component.ts instead.
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
import { TemplateFormComponent } from '@radzen/angular/dist/template-form';
import { LabelComponent } from '@radzen/angular/dist/label';
import { TextBoxComponent } from '@radzen/angular/dist/textbox';
import { RequiredValidatorComponent } from '@radzen/angular/dist/required-validator';
import { ListBoxComponent } from '@radzen/angular/dist/listbox';
import { PasswordComponent } from '@radzen/angular/dist/password';
import { TextAreaComponent } from '@radzen/angular/dist/textarea';
import { ButtonComponent } from '@radzen/angular/dist/button';
import { ImageComponent } from '@radzen/angular/dist/image';
import { UploadComponent } from '@radzen/angular/dist/upload';

import { ConfigService } from '../config.service';
import { MeldungJaNeinComponent } from '../meldung-ja-nein/meldung-ja-nein.component';

import { DbHopeKurseTextbausteineService } from '../db-hope-kurse-textbausteine.service';
import { SecurityService } from '../security.service';

export class BenutzerProfilGenerated implements AfterViewInit, OnInit, OnDestroy {
  // Components
  @ViewChild('content1') content1: ContentComponent;
  @ViewChild('heading1') heading1: HeadingComponent;
  @ViewChild('heading2') heading2: HeadingComponent;
  @ViewChild('heading3') heading3: HeadingComponent;
  @ViewChild('tabs0') tabs0: TabsComponent;
  @ViewChild('panel0') panel0: PanelComponent;
  @ViewChild('form0') form0: TemplateFormComponent;
  @ViewChild('label4') label4: LabelComponent;
  @ViewChild('textbox0') textbox0: TextBoxComponent;
  @ViewChild('label2') label2: LabelComponent;
  @ViewChild('benutzername') benutzername: TextBoxComponent;
  @ViewChild('requiredValidator4') requiredValidator4: RequiredValidatorComponent;
  @ViewChild('label3') label3: LabelComponent;
  @ViewChild('initialen') initialen: TextBoxComponent;
  @ViewChild('requiredValidator2') requiredValidator2: RequiredValidatorComponent;
  @ViewChild('label0') label0: LabelComponent;
  @ViewChild('benutzerEMail') benutzerEMail: TextBoxComponent;
  @ViewChild('requiredValidator0') requiredValidator0: RequiredValidatorComponent;
  @ViewChild('label1') label1: LabelComponent;
  @ViewChild('lkz') lkz: TextBoxComponent;
  @ViewChild('roleNamesLabel') roleNamesLabel: LabelComponent;
  @ViewChild('roleNames') roleNames: ListBoxComponent;
  @ViewChild('requiredValidator3') requiredValidator3: RequiredValidatorComponent;
  @ViewChild('passwordLabel') passwordLabel: LabelComponent;
  @ViewChild('password') password: PasswordComponent;
  @ViewChild('confirmPasswordLabel') confirmPasswordLabel: LabelComponent;
  @ViewChild('confirmPassword') confirmPassword: PasswordComponent;
  @ViewChild('label19') label19: LabelComponent;
  @ViewChild('notiz') notiz: TextAreaComponent;
  @ViewChild('button4') button4: ButtonComponent;
  @ViewChild('bild') bild: PanelComponent;
  @ViewChild('bildUrl') bildUrl: ImageComponent;
  @ViewChild('uploadBildBase') uploadBildBase: UploadComponent;
  @ViewChild('buttonBildEntfernen') buttonBildEntfernen: ButtonComponent;
  @ViewChild('panel1') panel1: PanelComponent;

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
  rstRollen: any;
  dsoBenutzer: any;
  strNameKontakt: any;
  dsoUser: any;
  dsoBase: any;
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
    this.dbHopeKurseTextbausteine.getVwRollens(null, null, null, null, null, null, null, null)
    .subscribe((result: any) => {
      this.rstRollen = result.value;
    }, (result: any) => {

    });

    this.dbHopeKurseTextbausteine.getBenutzers(`BenutzerName eq '${this.security.user.name}'`, null, null, null, null, `Base`, null, null)
    .subscribe((result: any) => {
      this.dsoBenutzer = result.value[0];

      this.strNameKontakt = this.dsoBenutzer.Base.Name1 + ' ' + this.dsoBenutzer.Base.Name2;

      this.security.getUserById(`${this.dsoBenutzer.AspNetUsers_Id}`)
      .subscribe((result: any) => {
        this.dsoUser = result;
      }, (result: any) => {

      });

      this.dbHopeKurseTextbausteine.getBaseByBaseId(null, this.dsoBenutzer.BaseID)
      .subscribe((result: any) => {
        this.dsoBase = result;
      }, (result: any) => {

      });
    }, (result: any) => {

    });
  }

  form0Submit(event: any) {
    this.dsoUser.UserName = this.dsoBenutzer.BenutzerEMail 

    this.security.updateUser(`${this.dsoBenutzer.AspNetUsers_Id}`, this.dsoUser)
    .subscribe((result: any) => {
      this.dbHopeKurseTextbausteine.updateBenutzer(null, this.dsoBenutzer.BenutzerID, this.dsoBenutzer)
      .subscribe((result: any) => {
        this.notificationService.notify({ severity: "success", summary: ``, detail: `Benutzer aktualisiert` });

        this.dialogRef.close(result);
      }, (result: any) => {
        this.notificationService.notify({ severity: "error", summary: ``, detail: `Benutzer (Schritt 2) konnte nicht aktualisiert werden!` })
        .subscribe(() => {

        });
      });
    }, (result: any) => {
      this.notificationService.notify({ severity: "error", summary: ``, detail: `Benutzer (Schritt 1) konnte nicht aktualisiert werden!` });
    });
  }

  button4Click(event: any) {
    this.dsoUser.UserName = this.dsoBenutzer.BenutzerEMail 

    this.security.updateUser(`${this.dsoBenutzer.AspNetUsers_Id}`, this.dsoUser)
    .subscribe((result: any) => {
      this.dbHopeKurseTextbausteine.updateBenutzer(null, this.dsoBenutzer.BenutzerID, this.dsoBenutzer)
      .subscribe((result: any) => {
        this.notificationService.notify({ severity: "success", summary: ``, detail: `Benutzer aktualisiert` });
      }, (result: any) => {
        this.notificationService.notify({ severity: "error", summary: ``, detail: `Benutzer (Schritt 2) konnte nicht aktualisiert werden!` })
        .subscribe(() => {

        });
      });
    }, (result: any) => {
      this.notificationService.notify({ severity: "error", summary: ``, detail: `Benutzer (Schritt 1) konnte nicht aktualisiert werden!` });
    });
  }

  uploadBildBaseBeforeUpload(event: any) {
    var strDateiName = this.uploadBildBase.fileUpload.files[0].name;
var strDateiEndung = strDateiName.substring(strDateiName.indexOf("."));

this.dsoBase.BildURL = 'https://hopekurse-textbausteine.app/upload/bilder/base/KeinBildPerson.png';
this.dsoBase.BildURL = 'https://hopekurse-textbausteine.app/upload/bilder/base/' + this.dsoBase.BaseID + strDateiEndung;
  }

  uploadBildBaseError(event: any) {
    this.notificationService.notify({ severity: "error", summary: `Bild`, detail: `Hochladen fehlgeschlagen!` });
  }

  uploadBildBaseUpload(event: any) {
    this.dbHopeKurseTextbausteine.updateBase(null, this.dsoBase.BaseID, this.dsoBase)
    .subscribe((result: any) => {

    }, (result: any) => {

    });

    this.notificationService.notify({ severity: "success", summary: `Bild`, detail: `Erfolgreich hochgeladen!` });

    window.location.reload();
  }

  buttonBildEntfernenClick(event: any) {
    this.dialogService.open(MeldungJaNeinComponent, { parameters: {strMeldung: "Soll das Bild von '" + this.dsoBase.Name1 + " " + this.dsoBase.Name2 + "' entfernt werden?"}, title: `Bild entfernen` })
        .afterClosed().subscribe(result => {
              if (result == 'Ja') {
        this.dsoBase.BildURL = 'https://hopekurse-textbausteine.app/upload/bilder/base/KeinBildPerson.png';
      }

      if (result == 'Ja') {
              this.dbHopeKurseTextbausteine.updateBase(null, this.dsoBase.BaseID, this.dsoBase)
        .subscribe((result: any) => {
              this.notificationService.notify({ severity: "success", summary: ``, detail: `Bild entfernt` });
        }, (result: any) => {
              this.notificationService.notify({ severity: "error", summary: ``, detail: `Bild konnte nicht entfernt werden!` });
        });
      }
    });
  }
}
