/*
  This file is automatically generated. Any changes will be overwritten.
  Modify kontakt.component.ts instead.
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
import { HtmlComponent } from '@radzen/angular/dist/html';
import { ImageComponent } from '@radzen/angular/dist/image';

import { ConfigService } from '../config.service';

import { DbHopeKurseTextbausteineService } from '../db-hope-kurse-textbausteine.service';
import { SecurityService } from '../security.service';

export class KontaktGenerated implements AfterViewInit, OnInit, OnDestroy {
  // Components
  @ViewChild('content1') content1: ContentComponent;
  @ViewChild('heading18') heading18: HeadingComponent;
  @ViewChild('heading19') heading19: HeadingComponent;
  @ViewChild('heading21') heading21: HeadingComponent;
  @ViewChild('tabs0') tabs0: TabsComponent;
  @ViewChild('html0') html0: HtmlComponent;
  @ViewChild('image0') image0: ImageComponent;

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
  kontaktHtml: any;
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
    this.dbHopeKurseTextbausteine.getInfotexteHtmls(`Code eq 'KontaktWeb'`, null, null, null, null, null, null, null)
    .subscribe((result: any) => {
      this.kontaktHtml = result.value[0].Inhalt;
    }, (result: any) => {

    });
  }
}
