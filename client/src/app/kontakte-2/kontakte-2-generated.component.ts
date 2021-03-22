/*
  This file is automatically generated. Any changes will be overwritten.
  Modify kontakte-2.component.ts instead.
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
import { GridComponent } from '@radzen/angular/dist/grid';
import { LabelComponent } from '@radzen/angular/dist/label';
import { TextBoxComponent } from '@radzen/angular/dist/textbox';
import { CardComponent } from '@radzen/angular/dist/card';
import { TemplateFormComponent } from '@radzen/angular/dist/template-form';
import { DropDownComponent } from '@radzen/angular/dist/dropdown';
import { RequiredValidatorComponent } from '@radzen/angular/dist/required-validator';
import { ButtonComponent } from '@radzen/angular/dist/button';

import { ConfigService } from '../config.service';

import { DbHopeKurseTextbausteineService } from '../db-hope-kurse-textbausteine.service';
import { SecurityService } from '../security.service';

export class Kontakte2Generated implements AfterViewInit, OnInit, OnDestroy {
  // Components
  @ViewChild('content1') content1: ContentComponent;
  @ViewChild('pageTitle') pageTitle: HeadingComponent;
  @ViewChild('grid0') grid0: GridComponent;
  @ViewChild('bildUrlLabel') bildUrlLabel: LabelComponent;
  @ViewChild('bildUrl') bildUrl: TextBoxComponent;
  @ViewChild('card1') card1: CardComponent;
  @ViewChild('form0') form0: TemplateFormComponent;
  @ViewChild('anredeIdLabel') anredeIdLabel: LabelComponent;
  @ViewChild('anredeId') anredeId: DropDownComponent;
  @ViewChild('name1Label') name1Label: LabelComponent;
  @ViewChild('name1') name1: TextBoxComponent;
  @ViewChild('name1RequiredValidator') name1RequiredValidator: RequiredValidatorComponent;
  @ViewChild('name2Label') name2Label: LabelComponent;
  @ViewChild('name2') name2: TextBoxComponent;
  @ViewChild('nameKuerzelLabel') nameKuerzelLabel: LabelComponent;
  @ViewChild('nameKuerzel') nameKuerzel: TextBoxComponent;
  @ViewChild('titelVorneLabel') titelVorneLabel: LabelComponent;
  @ViewChild('titelVorne') titelVorne: TextBoxComponent;
  @ViewChild('titelHintenLabel') titelHintenLabel: LabelComponent;
  @ViewChild('titelHinten') titelHinten: TextBoxComponent;
  @ViewChild('strasseLabel') strasseLabel: LabelComponent;
  @ViewChild('strasse') strasse: TextBoxComponent;
  @ViewChild('plzLabel') plzLabel: LabelComponent;
  @ViewChild('plz') plz: TextBoxComponent;
  @ViewChild('ortLabel') ortLabel: LabelComponent;
  @ViewChild('ort') ort: TextBoxComponent;
  @ViewChild('lkzLabel') lkzLabel: LabelComponent;
  @ViewChild('lkz') lkz: TextBoxComponent;
  @ViewChild('telefon1Label') telefon1Label: LabelComponent;
  @ViewChild('telefon1') telefon1: TextBoxComponent;
  @ViewChild('telefon2Label') telefon2Label: LabelComponent;
  @ViewChild('telefon2') telefon2: TextBoxComponent;
  @ViewChild('eMail1Label') eMail1Label: LabelComponent;
  @ViewChild('eMail1') eMail1: TextBoxComponent;
  @ViewChild('eMail2Label') eMail2Label: LabelComponent;
  @ViewChild('eMail2') eMail2: TextBoxComponent;
  @ViewChild('websiteLabel') websiteLabel: LabelComponent;
  @ViewChild('website') website: TextBoxComponent;
  @ViewChild('notizLabel') notizLabel: LabelComponent;
  @ViewChild('notiz') notiz: TextBoxComponent;
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
  getBaseAnredensResult: any;
  parameters: any;
  isEdit: any;
  base: any;
  getBasesResult: any;
  getBasesCount: any;

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
    this.dbHopeKurseTextbausteine.getBaseAnredens(null, null, null, null, null, null, null, null)
    .subscribe((result: any) => {
      this.getBaseAnredensResult = result.value;
    }, (result: any) => {

    });

    this.grid0.load();
  }

  grid0Add(event: any) {
    this.isEdit = false;

    this.base = {};
  }

  grid0Delete(event: any) {
    this.dbHopeKurseTextbausteine.deleteBase(event.BaseID)
    .subscribe((result: any) => {
      this.notificationService.notify({ severity: "success", summary: `Success`, detail: `Base deleted!` });
    }, (result: any) => {
      this.notificationService.notify({ severity: "error", summary: `Error`, detail: `Unable to delete Base` });
    });
  }

  grid0LoadData(event: any) {
    this.dbHopeKurseTextbausteine.getBases(`${event.filter}`, event.top, event.skip, `${event.orderby || 'Name1, Name2'}`, event.top != null && event.skip != null, `BaseAnreden`, null, null)
    .subscribe((result: any) => {
      this.getBasesResult = result.value;

      this.getBasesCount = event.top != null && event.skip != null ? result['@odata.count'] : result.value.length;

      if (result.value.length && !this.grid0.value) {
        this.grid0.onSelect(result.value[0])
      }
    }, (result: any) => {
      this.notificationService.notify({ severity: "error", summary: `Error`, detail: `Unable to load Bases` });
    });
  }

  grid0RowSelect(event: any) {
    this.isEdit = true;

    this.base = event;
  }

  form0Submit(event: any) {
    if (this.isEdit) {
          this.dbHopeKurseTextbausteine.updateBase(null, this.base.BaseID, event)
      .subscribe((result: any) => {
          this.notificationService.notify({ severity: "success", summary: `Success`, detail: `Base updated!` });

      this.grid0.load()
      }, (result: any) => {
          this.notificationService.notify({ severity: "error", summary: `Error`, detail: `Unable to update Base` });
      });
    }

    if (!this.isEdit) {
          this.dbHopeKurseTextbausteine.createBase(null, event)
      .subscribe((result: any) => {
          this.base = {};

      this.notificationService.notify({ severity: "success", summary: `Success`, detail: `Base created!` });
      }, (result: any) => {
          this.notificationService.notify({ severity: "error", summary: `Error`, detail: `Unable to create new Base!` });
      });
    }
  }
}
