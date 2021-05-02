/*
  This file is automatically generated. Any changes will be overwritten.
  Modify textbausteine-duplizieren.component.ts instead.
*/
import { LOCALE_ID, ChangeDetectorRef, ViewChild, AfterViewInit, Injector, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Subscription } from 'rxjs';

import { DialogService, DIALOG_PARAMETERS, DialogRef } from '@radzen/angular/dist/dialog';
import { NotificationService } from '@radzen/angular/dist/notification';
import { ContentComponent } from '@radzen/angular/dist/content';
import { TemplateFormComponent } from '@radzen/angular/dist/template-form';
import { LabelComponent } from '@radzen/angular/dist/label';
import { DropDownComponent } from '@radzen/angular/dist/dropdown';
import { RequiredValidatorComponent } from '@radzen/angular/dist/required-validator';
import { TextBoxComponent } from '@radzen/angular/dist/textbox';
import { NumericComponent } from '@radzen/angular/dist/numeric';
import { UploadComponent } from '@radzen/angular/dist/upload';
import { TextAreaComponent } from '@radzen/angular/dist/textarea';
import { ButtonComponent } from '@radzen/angular/dist/button';

import { ConfigService } from '../config.service';

import { DbHopeKurseTextbausteineService } from '../db-hope-kurse-textbausteine.service';
import { SecurityService } from '../security.service';

export class TextbausteineDuplizierenGenerated implements AfterViewInit, OnInit, OnDestroy {
  // Components
  @ViewChild('content1') content1: ContentComponent;
  @ViewChild('form0') form0: TemplateFormComponent;
  @ViewChild('textbausteinArtCodeLabel') textbausteinArtCodeLabel: LabelComponent;
  @ViewChild('textbausteinArtCode') textbausteinArtCode: DropDownComponent;
  @ViewChild('requiredValidator0') requiredValidator0: RequiredValidatorComponent;
  @ViewChild('autorNrLabel') autorNrLabel: LabelComponent;
  @ViewChild('autorNr') autorNr: DropDownComponent;
  @ViewChild('autorNrRequiredValidator') autorNrRequiredValidator: RequiredValidatorComponent;
  @ViewChild('kursNrLabel') kursNrLabel: LabelComponent;
  @ViewChild('kursNr') kursNr: DropDownComponent;
  @ViewChild('kursNrRequiredValidator') kursNrRequiredValidator: RequiredValidatorComponent;
  @ViewChild('anredeLabel') anredeLabel: LabelComponent;
  @ViewChild('anrede') anrede: DropDownComponent;
  @ViewChild('requiredValidator2') requiredValidator2: RequiredValidatorComponent;
  @ViewChild('titelTextbausteinLabel') titelTextbausteinLabel: LabelComponent;
  @ViewChild('titelTextbaustein') titelTextbaustein: TextBoxComponent;
  @ViewChild('requiredValidator1') requiredValidator1: RequiredValidatorComponent;
  @ViewChild('untertitelTextbausteinLabel') untertitelTextbausteinLabel: LabelComponent;
  @ViewChild('untertitelTextbaustein') untertitelTextbaustein: TextBoxComponent;
  @ViewChild('themaNummerLabel') themaNummerLabel: LabelComponent;
  @ViewChild('themaNummer') themaNummer: NumericComponent;
  @ViewChild('dokumentTitelLabel') dokumentTitelLabel: LabelComponent;
  @ViewChild('dokumentTitel') dokumentTitel: TextBoxComponent;
  @ViewChild('upload0') upload0: UploadComponent;
  @ViewChild('landLabel') landLabel: LabelComponent;
  @ViewChild('land') land: DropDownComponent;
  @ViewChild('label19') label19: LabelComponent;
  @ViewChild('infoText') infoText: TextAreaComponent;
  @ViewChild('button0') button0: ButtonComponent;
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
  dsoTextbausteine: any;
  rstTextbausteineArten: any;
  rstTextbausteineAutoren: any;
  rstKurse: any;
  rstTextbausteineAnreden: any;
  rstLaender: any;
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
    this.dbHopeKurseTextbausteine.getIbsiTextbausteineByTextbausteinNr(null, this.parameters.TextbausteinNr)
    .subscribe((result: any) => {
      this.dsoTextbausteine = result;

      this.dsoTextbausteine.TitelTextbaustein = this.dsoTextbausteine.TitelTextbaustein + ' - Duplikat'
    }, (result: any) => {

    });

    this.dbHopeKurseTextbausteine.getIbsiTextbausteineArtens(null, null, null, `Sortierung`, null, null, null, `TextbausteinArtCode, Bezeichnung`)
    .subscribe((result: any) => {
      this.rstTextbausteineArten = result.value;
    }, (result: any) => {

    });

    this.dbHopeKurseTextbausteine.getIbsiTextbausteineAutorens(null, null, null, `Name`, null, null, null, `AutorNr, Name`)
    .subscribe((result: any) => {
      this.rstTextbausteineAutoren = result.value;
    }, (result: any) => {

    });

    this.dbHopeKurseTextbausteine.getIbsiKurses(null, null, null, `Titel`, null, null, null, `KursNr, Titel`)
    .subscribe((result: any) => {
      this.rstKurse = result.value;
    }, (result: any) => {

    });

    this.dbHopeKurseTextbausteine.getIbsiTextbausteineAnredens(null, null, null, `Sortierung`, null, null, null, `Anrede, Bezeichnung`)
    .subscribe((result: any) => {
      this.rstTextbausteineAnreden = result.value;
    }, (result: any) => {

    });

    this.rstLaender = [{Titel: 'Deutschland', LKZ: 'D'}, {Titel: 'Österreich', LKZ: 'A'}, {Titel: 'Schweiz', LKZ: 'CH'}];
  }

  form0Submit(event: any) {
    delete this.dsoTextbausteine.TextbausteinNr

    this.dbHopeKurseTextbausteine.createIbsiTextbausteine(null, this.dsoTextbausteine)
    .subscribe((result: any) => {
      this.notificationService.notify({ severity: "success", summary: ``, detail: `Textbaustein dupliziert` });

      this.dialogRef.close(result);
    }, (result: any) => {
      this.notificationService.notify({ severity: "error", summary: ``, detail: `Textbaustein konnte nicht dupliziert werden!` });
    });
  }

  button1Click(event: any) {
    if (this.dialogRef) {
      this.dialogRef.close();
    } else {
      this._location.back();
    }
  }
}
