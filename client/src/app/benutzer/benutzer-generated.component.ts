/*
  This file is automatically generated. Any changes will be overwritten.
  Modify benutzer.component.ts instead.
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

import { ConfigService } from '../config.service';
import { MeldungLoeschenComponent } from '../meldung-loeschen/meldung-loeschen.component';
import { BenutzerBearbeitenComponent } from '../benutzer-bearbeiten/benutzer-bearbeiten.component';
import { BenutzerNeuComponent } from '../benutzer-neu/benutzer-neu.component';

import { DbHopeKurseTextbausteineService } from '../db-hope-kurse-textbausteine.service';
import { SecurityService } from '../security.service';

export class BenutzerGenerated implements AfterViewInit, OnInit, OnDestroy {
  // Components
  @ViewChild('content1') content1: ContentComponent;
  @ViewChild('heading0') heading0: HeadingComponent;
  @ViewChild('heading1') heading1: HeadingComponent;
  @ViewChild('heading2') heading2: HeadingComponent;
  @ViewChild('tabs0') tabs0: TabsComponent;
  @ViewChild('panel0') panel0: PanelComponent;
  @ViewChild('gridBenutzer') gridBenutzer: GridComponent;
  @ViewChild('buttonNeu') buttonNeu: ButtonComponent;
  @ViewChild('buttonBearbeiten') buttonBearbeiten: ButtonComponent;
  @ViewChild('buttonLoeschen') buttonLoeschen: ButtonComponent;
  @ViewChild('panel1') panel1: PanelComponent;
  @ViewChild('gridBenutzerRollen') gridBenutzerRollen: GridComponent;

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
  letzteBenutzerID: any;
  parameters: any;
  tempAspNetUsers_Id: any;
  rstBenutzer: any;
  rstBenutzerCount: any;
  dsoBenutzer: any;
  rstBenutzerRollen: any;
  rstBenutzerRollenCount: any;

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
    this.letzteBenutzerID = null;

    this.gridBenutzer.load();
  }

  gridBenutzerLoadData(event: any) {
    this.dbHopeKurseTextbausteine.getBenutzers(`${event.filter}`, event.top, event.skip, `${event.orderby || 'Benutzername'}`, event.top != null && event.skip != null, null, null, null)
    .subscribe((result: any) => {
      this.rstBenutzer = result.value;

      this.rstBenutzerCount = event.top != null && event.skip != null ? result['@odata.count'] : result.value.length;

      if (this.rstBenutzer.find(p => p.BenutzerID == this.letzteBenutzerID) != null) {
    // letzteBenutzerID wurde in rstBenutzer gefunden
    this.gridBenutzer.onSelect(this.rstBenutzer.find(p => p.BenutzerID == this.letzteBenutzerID));
} else {
    // letzteBenutzerID wurde in rstBenutzerID NICHT gefunden
    this.letzteBenutzerID = null;
    this.gridBenutzer.onSelect(this.rstBenutzer[0]);
}
    }, (result: any) => {
      this.notificationService.notify({ severity: "error", summary: ``, detail: `Benutzer können nicht geladen werden!` });
    });
  }

  gridBenutzerRowDoubleClick(event: any) {
    this.letzteBenutzerID = this.dsoBenutzer.BenutzerID;

    this.dialogService.open(BenutzerBearbeitenComponent, { parameters: {BenutzerID: event.BenutzerID}, title: `Bearbeiten Benutzer` });
  }

  gridBenutzerRowSelect(event: any) {
    this.dsoBenutzer = event;

    this.gridBenutzerRollen.load();
  }

  buttonNeuClick(event: any) {
    this.letzteBenutzerID = this.dsoBenutzer.BenutzerID;

    this.dialogService.open(BenutzerNeuComponent, { parameters: {}, title: `Neuer Benutzer` })
        .afterClosed().subscribe(result => {
              if (result != null) {
            this.letzteBenutzerID = result.BenutzerID;
      }

      if (result != null) {
        this.gridBenutzer.load();
      }
    });
  }

  buttonBearbeitenClick(event: any) {
    this.letzteBenutzerID = this.dsoBenutzer.BenutzerID;

    this.dialogService.open(BenutzerBearbeitenComponent, { parameters: {BenutzerID: this.dsoBenutzer.BenutzerID}, title: `Bearbeiten Benutzer` });
  }

  buttonLoeschenClick(event: any) {
    this.letzteBenutzerID = null;

    this.tempAspNetUsers_Id = this.dsoBenutzer.AspNetUsers_Id;

    this.dialogService.open(MeldungLoeschenComponent, { parameters: {strMeldung: "Soll der Benutzer '" + this.dsoBenutzer.Benutzername + "' gelöscht werden?"}, title: `Löschen Benutzer` })
        .afterClosed().subscribe(result => {
              if (result == 'Löschen') {
              this.dbHopeKurseTextbausteine.deleteBenutzer(
this.dsoBenutzer.BenutzerID)
        .subscribe((result: any) => {
              this.security.deleteUser(`${this.tempAspNetUsers_Id}`)
        .subscribe((result: any) => {
          this.notificationService.notify({ severity: "success", summary: ``, detail: `Benutzer gelöscht` });
        }, (result: any) => {
          this.notificationService.notify({ severity: "error", summary: ``, detail: `Benutzer (Schritt 2) konnte nicht gelöscht werden!` });
        });
        }, (result: any) => {
              this.notificationService.notify({ severity: "error", summary: ``, detail: `Benutzer (Schritt 1) konnte nicht gelöscht werden!` });
        });
      }
    });
  }

  gridBenutzerRollenLoadData(event: any) {
    this.dbHopeKurseTextbausteine.getVwBenutzerRollens(`BenutzerID eq ${this.dsoBenutzer.BenutzerID}`, null, null, null, null, null, null, null)
    .subscribe((result: any) => {
      this.rstBenutzerRollen = result.value;

      this.rstBenutzerRollenCount = event.top != null && event.skip != null ? result['@odata.count'] : result.value.length;
    }, (result: any) => {
      this.notificationService.notify({ severity: "error", summary: ``, detail: `Benutzer Rollen können nicht geladen werden!` });
    });
  }
}
