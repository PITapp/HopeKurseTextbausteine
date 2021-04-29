/*
  This file is automatically generated. Any changes will be overwritten.
  Modify benutzer-neu.component.ts instead.
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
import { PasswordComponent } from '@radzen/angular/dist/password';
import { TextAreaComponent } from '@radzen/angular/dist/textarea';
import { ButtonComponent } from '@radzen/angular/dist/button';

import { ConfigService } from '../config.service';

import { DbHopeKurseTextbausteineService } from '../db-hope-kurse-textbausteine.service';
import { SecurityService } from '../security.service';

export class BenutzerNeuGenerated implements AfterViewInit, OnInit, OnDestroy {
  // Components
  @ViewChild('content1') content1: ContentComponent;
  @ViewChild('form0') form0: TemplateFormComponent;
  @ViewChild('label1') label1: LabelComponent;
  @ViewChild('baseId') baseId: DropDownComponent;
  @ViewChild('requiredValidator1') requiredValidator1: RequiredValidatorComponent;
  @ViewChild('label2') label2: LabelComponent;
  @ViewChild('benutzername') benutzername: TextBoxComponent;
  @ViewChild('requiredValidator4') requiredValidator4: RequiredValidatorComponent;
  @ViewChild('label3') label3: LabelComponent;
  @ViewChild('initialen') initialen: TextBoxComponent;
  @ViewChild('requiredValidator2') requiredValidator2: RequiredValidatorComponent;
  @ViewChild('label0') label0: LabelComponent;
  @ViewChild('eMail') eMail: TextBoxComponent;
  @ViewChild('requiredValidator0') requiredValidator0: RequiredValidatorComponent;
  @ViewChild('roleNamesLabel') roleNamesLabel: LabelComponent;
  @ViewChild('roleNames') roleNames: DropDownComponent;
  @ViewChild('requiredValidator3') requiredValidator3: RequiredValidatorComponent;
  @ViewChild('passwordLabel') passwordLabel: LabelComponent;
  @ViewChild('password') password: PasswordComponent;
  @ViewChild('passwordRequiredValidator') passwordRequiredValidator: RequiredValidatorComponent;
  @ViewChild('confirmPasswordLabel') confirmPasswordLabel: LabelComponent;
  @ViewChild('confirmPassword') confirmPassword: PasswordComponent;
  @ViewChild('confirmPasswordRequiredValidator') confirmPasswordRequiredValidator: RequiredValidatorComponent;
  @ViewChild('label19') label19: LabelComponent;
  @ViewChild('notiz') notiz: TextAreaComponent;
  @ViewChild('button1') button1: ButtonComponent;
  @ViewChild('button2') button2: ButtonComponent;
  @ViewChild('label4') label4: LabelComponent;
  @ViewChild('benutzerEMail') benutzerEMail: TextBoxComponent;
  @ViewChild('label5') label5: LabelComponent;
  @ViewChild('aspNetUsersId') aspNetUsersId: TextBoxComponent;

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
  rstBenutzerRollen: any;
  rstBase: any;
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
    this.security.getRoles(null, null, null, `Name`, null, null)
    .subscribe((result: any) => {
      this.rstBenutzerRollen = result.value;
    }, (result: any) => {

    });

    this.dbHopeKurseTextbausteine.getVwBaseAlles(null, null, null, null, null, null, null, null)
    .subscribe((result: any) => {
      this.rstBase = result.value;
    }, (result: any) => {

    });
  }

  form0Submit(event: any) {
    this.security.createUser(event)
    .subscribe((result: any) => {
      console.log("result: ", result)

      this.dialogRef.close(result);

      this.notificationService.notify({ severity: "success", summary: ``, detail: `Benutzer erstellt` });
    }, (result: any) => {
      this.notificationService.notify({ severity: "error", summary: ``, detail: `Benutzer konnte nicht erstellt werden!` });

      console.log("result: ", result)
    });

    console.log("event: ", event)
  }

  BaseIDChange(event: any) {
    this.benutzername.value = event.NameGesamt;
  }

  EMailChange(event: any) {
    this.benutzerEMail.value = event;
  }

  button2Click(event: any) {
    if (this.dialogRef) {
      this.dialogRef.close();
    } else {
      this._location.back();
    }
  }
}
