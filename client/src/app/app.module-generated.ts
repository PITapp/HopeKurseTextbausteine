/*
  This file is automatically generated. Any changes will be overwritten.
  Modify app.module.ts instead.
*/
import { APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BodyModule } from '@radzen/angular/dist/body';
import { CardModule } from '@radzen/angular/dist/card';
import { ImageModule } from '@radzen/angular/dist/image';
import { LabelModule } from '@radzen/angular/dist/label';
import { ContentContainerModule } from '@radzen/angular/dist/content-container';
import { HeaderModule } from '@radzen/angular/dist/header';
import { SidebarToggleModule } from '@radzen/angular/dist/sidebar-toggle';
import { LinkModule } from '@radzen/angular/dist/link';
import { ProfileMenuModule } from '@radzen/angular/dist/profilemenu';
import { SidebarModule } from '@radzen/angular/dist/sidebar';
import { PanelMenuModule } from '@radzen/angular/dist/panelmenu';
import { FooterModule } from '@radzen/angular/dist/footer';
import { ContentModule } from '@radzen/angular/dist/content';
import { TemplateFormModule } from '@radzen/angular/dist/template-form';
import { DropDownModule } from '@radzen/angular/dist/dropdown';
import { RequiredValidatorModule } from '@radzen/angular/dist/required-validator';
import { TextBoxModule } from '@radzen/angular/dist/textbox';
import { ListBoxModule } from '@radzen/angular/dist/listbox';
import { PasswordModule } from '@radzen/angular/dist/password';
import { TextAreaModule } from '@radzen/angular/dist/textarea';
import { ButtonModule } from '@radzen/angular/dist/button';
import { HeadingModule } from '@radzen/angular/dist/heading';
import { TabsModule } from '@radzen/angular/dist/tabs';
import { PanelModule } from '@radzen/angular/dist/panel';
import { GridModule } from '@radzen/angular/dist/grid';
import { ProgressBarModule } from '@radzen/angular/dist/progressbar';
import { GaugeModule } from '@radzen/angular/dist/gauge';
import { SparklineModule } from '@radzen/angular/dist/sparkline';
import { SelectBarModule } from '@radzen/angular/dist/selectbar';
import { ChartModule } from '@radzen/angular/dist/chart';
import { SchedulerModule } from '@radzen/angular/dist/scheduler';
import { DataListModule } from '@radzen/angular/dist/datalist';
import { HtmlModule } from '@radzen/angular/dist/html';
import { UploadModule } from '@radzen/angular/dist/upload';
import { NumericModule } from '@radzen/angular/dist/numeric';
import { CheckBoxModule } from '@radzen/angular/dist/checkbox';
import { LoginModule } from '@radzen/angular/dist/login';
import { SharedModule } from '@radzen/angular/dist/shared';
import { NotificationModule } from '@radzen/angular/dist/notification';
import { DialogModule } from '@radzen/angular/dist/dialog';

import { ConfigService, configServiceFactory } from './config.service';
import { AppRoutes } from './app.routes';
import { AppComponent } from './app.component';
import { CacheInterceptor } from './cache.interceptor';
export { AppComponent } from './app.component';
import { BenutzerNeuComponent } from './benutzer-neu/benutzer-neu.component';
import { BenutzerComponent } from './benutzer/benutzer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EinstellungenComponent } from './einstellungen/einstellungen.component';
import { BenutzerProfilComponent } from './benutzer-profil/benutzer-profil.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { DatenschutzComponent } from './datenschutz/datenschutz.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { TextbausteineComponent } from './textbausteine/textbausteine.component';
import { DokumenteComponent } from './dokumente/dokumente.component';
import { KontakteComponent } from './kontakte/kontakte.component';
import { KontakteNeuComponent } from './kontakte-neu/kontakte-neu.component';
import { KontakteBearbeitenComponent } from './kontakte-bearbeiten/kontakte-bearbeiten.component';
import { KurseNeuComponent } from './kurse-neu/kurse-neu.component';
import { KurseBearbeitenComponent } from './kurse-bearbeiten/kurse-bearbeiten.component';
import { AutorenNeuComponent } from './autoren-neu/autoren-neu.component';
import { AutorenBearbeitenComponent } from './autoren-bearbeiten/autoren-bearbeiten.component';
import { AutorenComponent } from './autoren/autoren.component';
import { KurseComponent } from './kurse/kurse.component';
import { KurseThemenNeuComponent } from './kurse-themen-neu/kurse-themen-neu.component';
import { KurseThemenBearbeitenComponent } from './kurse-themen-bearbeiten/kurse-themen-bearbeiten.component';
import { EinstellungenInfotexteNeuComponent } from './einstellungen-infotexte-neu/einstellungen-infotexte-neu.component';
import { EinstellungenInfotexteBearbeitenComponent } from './einstellungen-infotexte-bearbeiten/einstellungen-infotexte-bearbeiten.component';
import { MeldungLoeschenComponent } from './meldung-loeschen/meldung-loeschen.component';
import { MeldungJaNeinComponent } from './meldung-ja-nein/meldung-ja-nein.component';
import { BenutzerBearbeitenComponent } from './benutzer-bearbeiten/benutzer-bearbeiten.component';
import { TextbausteineNeuComponent } from './textbausteine-neu/textbausteine-neu.component';
import { TextbausteineBearbeitenComponent } from './textbausteine-bearbeiten/textbausteine-bearbeiten.component';
import { TextbausteineDuplizierenComponent } from './textbausteine-duplizieren/textbausteine-duplizieren.component';
import { TextbausteineFelderAuswahlComponent } from './textbausteine-felder-auswahl/textbausteine-felder-auswahl.component';
import { VersionenComponent } from './versionen/versionen.component';
import { InfoboxTextbausteineFilterTextComponent } from './infobox-textbausteine-filter-text/infobox-textbausteine-filter-text.component';
import { TextbausteineInfoComponent } from './textbausteine-info/textbausteine-info.component';
import { TextbausteineFilterInfoComponent } from './textbausteine-filter-info/textbausteine-filter-info.component';
import { TextbausteineDokumenteComponent } from './textbausteine-dokumente/textbausteine-dokumente.component';
import { HandbuchComponent } from './handbuch/handbuch.component';
import { LoginComponent } from './login/login.component';
import { EinstellungenInfotexteEditorComponent } from './einstellungen-infotexte-editor/einstellungen-infotexte-editor.component';
import { EinstellungenKopie1Component } from './einstellungen-kopie-1/einstellungen-kopie-1.component';
import { EinstellungenInfotexteEditorKopie1Component } from './einstellungen-infotexte-editor-kopie-1/einstellungen-infotexte-editor-kopie-1.component';
import { LoginLayoutComponent } from './login-layout/login-layout.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';

import { DbHopeKurseTextbausteineService } from './db-hope-kurse-textbausteine.service';
import { SecurityService, UserService } from './security.service';
import { SecurityInterceptor } from './security.interceptor';
import { AuthGuard } from './auth.guard';

export const PageDeclarations = [
  BenutzerNeuComponent,
  BenutzerComponent,
  DashboardComponent,
  EinstellungenComponent,
  BenutzerProfilComponent,
  ImpressumComponent,
  DatenschutzComponent,
  KontaktComponent,
  TextbausteineComponent,
  DokumenteComponent,
  KontakteComponent,
  KontakteNeuComponent,
  KontakteBearbeitenComponent,
  KurseNeuComponent,
  KurseBearbeitenComponent,
  AutorenNeuComponent,
  AutorenBearbeitenComponent,
  AutorenComponent,
  KurseComponent,
  KurseThemenNeuComponent,
  KurseThemenBearbeitenComponent,
  EinstellungenInfotexteNeuComponent,
  EinstellungenInfotexteBearbeitenComponent,
  MeldungLoeschenComponent,
  MeldungJaNeinComponent,
  BenutzerBearbeitenComponent,
  TextbausteineNeuComponent,
  TextbausteineBearbeitenComponent,
  TextbausteineDuplizierenComponent,
  TextbausteineFelderAuswahlComponent,
  VersionenComponent,
  InfoboxTextbausteineFilterTextComponent,
  TextbausteineInfoComponent,
  TextbausteineFilterInfoComponent,
  TextbausteineDokumenteComponent,
  HandbuchComponent,
  LoginComponent,
  EinstellungenInfotexteEditorComponent,
  EinstellungenKopie1Component,
  EinstellungenInfotexteEditorKopie1Component,
];

export const LayoutDeclarations = [
  LoginLayoutComponent,
  MainLayoutComponent,
];

export const AppDeclarations = [
  ...PageDeclarations,
  ...LayoutDeclarations,
  AppComponent
];

export const AppProviders = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: CacheInterceptor,
    multi: true
  },
  DbHopeKurseTextbausteineService,
  UserService,
  SecurityService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: SecurityInterceptor,
    multi: true
  },
  AuthGuard,
  ConfigService,
  {
    provide: APP_INITIALIZER,
    useFactory: configServiceFactory,
    deps: [ConfigService],
    multi: true
  }
];

export const AppImports = [
  BrowserModule,
  BrowserAnimationsModule,
  FormsModule,
  HttpClientModule,
  BodyModule,
  CardModule,
  ImageModule,
  LabelModule,
  ContentContainerModule,
  HeaderModule,
  SidebarToggleModule,
  LinkModule,
  ProfileMenuModule,
  SidebarModule,
  PanelMenuModule,
  FooterModule,
  ContentModule,
  TemplateFormModule,
  DropDownModule,
  RequiredValidatorModule,
  TextBoxModule,
  ListBoxModule,
  PasswordModule,
  TextAreaModule,
  ButtonModule,
  HeadingModule,
  TabsModule,
  PanelModule,
  GridModule,
  ProgressBarModule,
  GaugeModule,
  SparklineModule,
  SelectBarModule,
  ChartModule,
  SchedulerModule,
  DataListModule,
  HtmlModule,
  UploadModule,
  NumericModule,
  CheckBoxModule,
  LoginModule,
  SharedModule,
  NotificationModule,
  DialogModule,
  AppRoutes
];
