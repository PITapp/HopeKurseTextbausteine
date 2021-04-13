/*
  This file is automatically generated. Any changes will be overwritten.
  Modify kurse-bearbeiten.component.ts instead.
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
import { TextAreaComponent } from '@radzen/angular/dist/textarea';
import { NumericComponent } from '@radzen/angular/dist/numeric';
import { CheckBoxComponent } from '@radzen/angular/dist/checkbox';
import { ButtonComponent } from '@radzen/angular/dist/button';

import { ConfigService } from '../config.service';

import { DbHopeKurseTextbausteineService } from '../db-hope-kurse-textbausteine.service';
import { SecurityService } from '../security.service';

export class KurseBearbeitenGenerated implements AfterViewInit, OnInit, OnDestroy {
  // Components
  @ViewChild('content1') content1: ContentComponent;
  @ViewChild('form0') form0: TemplateFormComponent;
  @ViewChild('kursart') kursart: LabelComponent;
  @ViewChild('kursArtNr') kursArtNr: DropDownComponent;
  @ViewChild('kursArtNrRequiredValidator') kursArtNrRequiredValidator: RequiredValidatorComponent;
  @ViewChild('titelLabel') titelLabel: LabelComponent;
  @ViewChild('titel') titel: TextBoxComponent;
  @ViewChild('untertitelLabel') untertitelLabel: LabelComponent;
  @ViewChild('untertitel') untertitel: TextBoxComponent;
  @ViewChild('kurzzeichenLabel') kurzzeichenLabel: LabelComponent;
  @ViewChild('kurzzeichen') kurzzeichen: TextBoxComponent;
  @ViewChild('label0') label0: LabelComponent;
  @ViewChild('beschreibung') beschreibung: TextAreaComponent;
  @ViewChild('anzahlThemenLabel') anzahlThemenLabel: LabelComponent;
  @ViewChild('anzahlThemen') anzahlThemen: NumericComponent;
  @ViewChild('printkursLabel') printkursLabel: LabelComponent;
  @ViewChild('printkurs') printkurs: CheckBoxComponent;
  @ViewChild('onlinekursLabel') onlinekursLabel: LabelComponent;
  @ViewChild('onlinekurs') onlinekurs: CheckBoxComponent;
  @ViewChild('button1') button1: ButtonComponent;
  @ViewChild('button2') button2: ButtonComponent;

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
  dsoKurse: any;
  rstKurseArten: any;
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
    this.dbHopeKurseTextbausteine.getIbsiKurseByKursNr(null, this.parameters.KursNr)
    .subscribe((result: any) => {
      this.dsoKurse = result;
    }, (result: any) => {

    });

    this.dbHopeKurseTextbausteine.getIbsiKurseArtens(null, null, null, null, null, null, null, null)
    .subscribe((result: any) => {
      this.rstKurseArten = result.value;
    }, (result: any) => {

    });
  }

  form0Submit(event: any) {
    this.dbHopeKurseTextbausteine.updateIbsiKurse(null, this.parameters.KursNr, event)
    .subscribe((result: any) => {
      this.notificationService.notify({ severity: "success", summary: `Kurs gespeichert`, detail: `` });

      this.dialogRef.close(result);
    }, (result: any) => {
      this.notificationService.notify({ severity: "error", summary: ``, detail: `Kurs konnte nicht gespeichert werden!` });
    });
  }

  button2Click(event: any) {
    if (this.dialogRef) {
      this.dialogRef.close();
    } else {
      this._location.back();
    }
  }
}
