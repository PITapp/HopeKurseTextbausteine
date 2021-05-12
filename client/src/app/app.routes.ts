import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';

import { LoginLayoutComponent } from './login-layout/login-layout.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
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
import { LoginComponent } from './login/login.component';
import { VersionenComponent } from './versionen/versionen.component';
import { InfoboxTextbausteineFilterTextComponent } from './infobox-textbausteine-filter-text/infobox-textbausteine-filter-text.component';
import { TextbausteineInfoComponent } from './textbausteine-info/textbausteine-info.component';

import { SecurityService } from './security.service';
import { AuthGuard } from './auth.guard';
export const routes: Routes = [
  { path: '', redirectTo: '/textbausteine', pathMatch: 'full' },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'benutzer-neu',
        canActivate: [AuthGuard],
        data: {
          roles: ['Authenticated'],
        },
        component: BenutzerNeuComponent
      },
      {
        path: 'benutzer',
        canActivate: [AuthGuard],
        data: {
          roles: ['Authenticated'],
        },
        component: BenutzerComponent
      },
      {
        path: 'dashboard',
        canActivate: [AuthGuard],
        data: {
          roles: ['Authenticated'],
        },
        component: DashboardComponent
      },
      {
        path: 'einstellungen',
        canActivate: [AuthGuard],
        data: {
          roles: ['Administrator'],
        },
        component: EinstellungenComponent
      },
      {
        path: 'benutzer-profil',
        canActivate: [AuthGuard],
        data: {
          roles: ['Authenticated'],
        },
        component: BenutzerProfilComponent
      },
      {
        path: 'impressum',
        canActivate: [AuthGuard],
        data: {
          roles: ['Authenticated'],
        },
        component: ImpressumComponent
      },
      {
        path: 'datenschutz',
        canActivate: [AuthGuard],
        data: {
          roles: ['Authenticated'],
        },
        component: DatenschutzComponent
      },
      {
        path: 'kontakt',
        canActivate: [AuthGuard],
        data: {
          roles: ['Authenticated'],
        },
        component: KontaktComponent
      },
      {
        path: 'textbausteine',
        canActivate: [AuthGuard],
        data: {
          roles: ['Authenticated'],
        },
        component: TextbausteineComponent
      },
      {
        path: 'dokumente',
        canActivate: [AuthGuard],
        data: {
          roles: ['Authenticated'],
        },
        component: DokumenteComponent
      },
      {
        path: 'kontakte',
        canActivate: [AuthGuard],
        data: {
          roles: ['Authenticated'],
        },
        component: KontakteComponent
      },
      {
        path: 'kontakte-neu',
        canActivate: [AuthGuard],
        data: {
          roles: ['Authenticated'],
        },
        component: KontakteNeuComponent
      },
      {
        path: 'kontakte-bearbeiten/:BaseID',
        canActivate: [AuthGuard],
        data: {
          roles: ['Authenticated'],
        },
        component: KontakteBearbeitenComponent
      },
      {
        path: 'kurse-neu',
        canActivate: [AuthGuard],
        data: {
          roles: ['Authenticated'],
        },
        component: KurseNeuComponent
      },
      {
        path: 'kurse-bearbeiten/:KursNr',
        canActivate: [AuthGuard],
        data: {
          roles: ['Authenticated'],
        },
        component: KurseBearbeitenComponent
      },
      {
        path: 'autoren-neu',
        canActivate: [AuthGuard],
        data: {
          roles: ['Authenticated'],
        },
        component: AutorenNeuComponent
      },
      {
        path: 'autoren-bearbeiten/:AutorNr',
        canActivate: [AuthGuard],
        data: {
          roles: ['Authenticated'],
        },
        component: AutorenBearbeitenComponent
      },
      {
        path: 'autoren',
        canActivate: [AuthGuard],
        data: {
          roles: ['Authenticated'],
        },
        component: AutorenComponent
      },
      {
        path: 'kurse',
        canActivate: [AuthGuard],
        data: {
          roles: ['Authenticated'],
        },
        component: KurseComponent
      },
      {
        path: 'kurse-themen-neu',
        canActivate: [AuthGuard],
        data: {
          roles: ['Authenticated'],
        },
        component: KurseThemenNeuComponent
      },
      {
        path: 'kurse-themen-bearbeiten/:KursThemaNr',
        canActivate: [AuthGuard],
        data: {
          roles: ['Authenticated'],
        },
        component: KurseThemenBearbeitenComponent
      },
      {
        path: 'einstellungen-infotexte-neu',
        canActivate: [AuthGuard],
        data: {
          roles: ['Authenticated'],
        },
        component: EinstellungenInfotexteNeuComponent
      },
      {
        path: 'einstellungen-infotexte-bearbeiten/:InfotextID',
        canActivate: [AuthGuard],
        data: {
          roles: ['Authenticated'],
        },
        component: EinstellungenInfotexteBearbeitenComponent
      },
      {
        path: 'meldung-loeschen/:strMeldung',
        canActivate: [AuthGuard],
        data: {
          roles: ['Authenticated'],
        },
        component: MeldungLoeschenComponent
      },
      {
        path: 'meldung-ja-nein/:strMeldung',
        canActivate: [AuthGuard],
        data: {
          roles: ['Authenticated'],
        },
        component: MeldungJaNeinComponent
      },
      {
        path: 'benutzer-bearbeiten/:BenutzerID',
        canActivate: [AuthGuard],
        data: {
          roles: ['Authenticated'],
        },
        component: BenutzerBearbeitenComponent
      },
      {
        path: 'textbausteine-neu',
        canActivate: [AuthGuard],
        data: {
          roles: ['Authenticated'],
        },
        component: TextbausteineNeuComponent
      },
      {
        path: 'textbausteine-bearbeiten/:TextbausteinNr',
        canActivate: [AuthGuard],
        data: {
          roles: ['Authenticated'],
        },
        component: TextbausteineBearbeitenComponent
      },
      {
        path: 'textbausteine-duplizieren/:TextbausteinNr',
        canActivate: [AuthGuard],
        data: {
          roles: ['Authenticated'],
        },
        component: TextbausteineDuplizierenComponent
      },
      {
        path: 'textbausteine-felder-auswahl',
        canActivate: [AuthGuard],
        data: {
          roles: ['Authenticated'],
        },
        component: TextbausteineFelderAuswahlComponent
      },
      {
        path: 'versionen',
        canActivate: [AuthGuard],
        data: {
          roles: ['Authenticated'],
        },
        component: VersionenComponent
      },
      {
        path: 'infobox-textbausteine-filter-text',
        canActivate: [AuthGuard],
        data: {
          roles: ['Authenticated'],
        },
        component: InfoboxTextbausteineFilterTextComponent
      },
      {
        path: 'textbausteine-info/:TextbausteinNr',
        canActivate: [AuthGuard],
        data: {
          roles: ['Authenticated'],
        },
        component: TextbausteineInfoComponent
      },
    ]
  },
  {
    path: '',
    component: LoginLayoutComponent,
    children: [
      {
        path: 'login',
        data: {
          roles: ['Everybody'],
        },
        component: LoginComponent
      },
    ]
  },
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
