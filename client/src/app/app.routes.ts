import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';

import { LoginLayoutComponent } from './login-layout/login-layout.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { BenutzerNeuComponent } from './benutzer-neu/benutzer-neu.component';
import { BenutzerBearbeitenComponent } from './benutzer-bearbeiten/benutzer-bearbeiten.component';
import { BenutzerComponent } from './benutzer/benutzer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EinstellungenComponent } from './einstellungen/einstellungen.component';
import { BenutzerProfilComponent } from './benutzer-profil/benutzer-profil.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { DatenschutzComponent } from './datenschutz/datenschutz.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { TextbausteineComponent } from './textbausteine/textbausteine.component';
import { DokumenteComponent } from './dokumente/dokumente.component';
import { NachrichtenComponent } from './nachrichten/nachrichten.component';
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
import { ApplicationUsersComponent } from './application-users/application-users.component';
import { ApplicationRolesComponent } from './application-roles/application-roles.component';
import { RegisterApplicationUserComponent } from './register-application-user/register-application-user.component';
import { AddApplicationRoleComponent } from './add-application-role/add-application-role.component';
import { AddApplicationUserComponent } from './add-application-user/add-application-user.component';
import { EditApplicationUserComponent } from './edit-application-user/edit-application-user.component';
import { Benutzer222Component } from './benutzer-222/benutzer-222.component';
import { AddBenutzer222Component } from './add-benutzer-222/add-benutzer-222.component';
import { EditBenutzer222Component } from './edit-benutzer-222/edit-benutzer-222.component';

import { SecurityService } from './security.service';
import { AuthGuard } from './auth.guard';
export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
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
        path: 'benutzer-bearbeiten/:BenutzerID',
        canActivate: [AuthGuard],
        data: {
          roles: ['Authenticated'],
        },
        component: BenutzerBearbeitenComponent
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
          roles: ['Authenticated'],
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
        path: 'profile',
        canActivate: [AuthGuard],
        data: {
          roles: ['Authenticated'],
        },
        component: ProfileComponent
      },
      {
        path: 'unauthorized',
        data: {
          roles: ['Everybody'],
        },
        component: UnauthorizedComponent
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
        path: 'nachrichten',
        canActivate: [AuthGuard],
        data: {
          roles: ['Authenticated'],
        },
        component: NachrichtenComponent
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
        path: 'application-users',
        canActivate: [AuthGuard],
        data: {
          roles: ['Authenticated'],
        },
        component: ApplicationUsersComponent
      },
      {
        path: 'application-roles',
        canActivate: [AuthGuard],
        data: {
          roles: ['Authenticated'],
        },
        component: ApplicationRolesComponent
      },
      {
        path: 'register-application-user',
        data: {
          roles: ['Everybody'],
        },
        component: RegisterApplicationUserComponent
      },
      {
        path: 'add-application-role',
        canActivate: [AuthGuard],
        data: {
          roles: ['Authenticated'],
        },
        component: AddApplicationRoleComponent
      },
      {
        path: 'add-application-user',
        canActivate: [AuthGuard],
        data: {
          roles: ['Authenticated'],
        },
        component: AddApplicationUserComponent
      },
      {
        path: 'edit-application-user/:Id',
        canActivate: [AuthGuard],
        data: {
          roles: ['Authenticated'],
        },
        component: EditApplicationUserComponent
      },
      {
        path: 'benutzer-222',
        canActivate: [AuthGuard],
        data: {
          roles: ['Authenticated'],
        },
        component: Benutzer222Component
      },
      {
        path: 'add-benutzer-222',
        canActivate: [AuthGuard],
        data: {
          roles: ['Authenticated'],
        },
        component: AddBenutzer222Component
      },
      {
        path: 'edit-benutzer-222/:BenutzerID',
        canActivate: [AuthGuard],
        data: {
          roles: ['Authenticated'],
        },
        component: EditBenutzer222Component
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
