/*
  This file is automatically generated. Any changes will be overwritten.
  Modify autoren.component.ts instead.
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
import { TextBoxComponent } from '@radzen/angular/dist/textbox';
import { ButtonComponent } from '@radzen/angular/dist/button';

import { ConfigService } from '../config.service';
import { AutorenBearbeitenComponent } from '../autoren-bearbeiten/autoren-bearbeiten.component';
import { AutorenNeuComponent } from '../autoren-neu/autoren-neu.component';

import { DbHopeKurseTextbausteineService } from '../db-hope-kurse-textbausteine.service';
import { SecurityService } from '../security.service';

export class AutorenGenerated implements AfterViewInit, OnInit, OnDestroy {
  // Components
  @ViewChild('content1') content1: ContentComponent;
  @ViewChild('heading18') heading18: HeadingComponent;
  @ViewChild('heading19') heading19: HeadingComponent;
  @ViewChild('heading21') heading21: HeadingComponent;
  @ViewChild('tabs0') tabs0: TabsComponent;
  @ViewChild('panel1') panel1: PanelComponent;
  @ViewChild('gridAutoren') gridAutoren: GridComponent;
  @ViewChild('button0') button0: ButtonComponent;
  @ViewChild('panel0') panel0: PanelComponent;
  @ViewChild('grid0') grid0: GridComponent;

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
  parameters: any;
  rstAutoren: any;
  rstAutorenCount: any;
  dsoAutoren: any;
  rstTextbausteineLaden: any;
  rstTextbausteine: any;
  rstTextbausteineCount: any;

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
    this.gridAutoren.load();
  }

  gridAutorenDelete(event: any) {
    this.dbHopeKurseTextbausteine.deleteIbsiTextbausteineAutoren(event.AutorNr)
    .subscribe((result: any) => {
      this.notificationService.notify({ severity: "success", summary: `Autor erfolgreich gelöscht`, detail: `` });
    }, (result: any) => {
      this.notificationService.notify({ severity: "error", summary: `Autor konnte nicht gelöscht werden!`, detail: `` });
    });
  }

  gridAutorenLoadData(event: any) {
    this.dbHopeKurseTextbausteine.getIbsiTextbausteineAutorens(`${event.filter}`, event.top, event.skip, `${event.orderby || 'Name'}`, event.top != null && event.skip != null, null, null, null)
    .subscribe((result: any) => {
      this.rstAutoren = result.value;

      this.rstAutorenCount = event.top != null && event.skip != null ? result['@odata.count'] : result.value.length;

      this.gridAutoren.onSelect(result.value[0])
    }, (result: any) => {
      this.notificationService.notify({ severity: "error", summary: `Autoren konnten nicht geladen werden!`, detail: `` });
    });
  }

  gridAutorenRowSelect(event: any) {
    this.dsoAutoren = event;

    this.rstTextbausteineLaden = true;

    this.dbHopeKurseTextbausteine.getIbsiTextbausteines(`AutorNr eq ${event.AutorNr}`, event.top, event.skip, `IbsiKurse/Titel, TitelTextbaustein`, event.top != null && event.skip != null, `IbsiKurse, IbsiTextbausteineArten`, null, null)
    .subscribe((result: any) => {
      this.rstTextbausteine = result.value;

      this.rstTextbausteineCount = event.top != null && event.skip != null ? result['@odata.count'] : result.value.length;

      this.rstTextbausteineLaden = false;
    }, (result: any) => {

    });
  }

  editButtonClick(event: any, data: any) {
    this.dialogService.open(AutorenBearbeitenComponent, { parameters: {AutorNr: data.AutorNr}, title: `Bearbeiten Autor` });
  }

  button0Click(event: any) {
    this.dialogService.open(AutorenNeuComponent, { parameters: {}, title: `Neuer Autor ` })
        .afterClosed().subscribe(result => {
              if (result != null) {
        
this.gridAutoren.load();
      }
    });
  }
}