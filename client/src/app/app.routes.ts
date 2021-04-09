import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';

import { LoginLayoutComponent } from './login-layout/login-layout.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { BenutzerNeuComponent } from './benutzer-neu/benutzer-neu.component';
import { BenutzerNeuRolleComponent } from './benutzer-neu-rolle/benutzer-neu-rolle.component';
import { BenutzerBearbeitenComponent } from './benutzer-bearbeiten/benutzer-bearbeiten.component';
import { BenutzerComponent } from './benutzer/benutzer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EinstellungenComponent } from './einstellungen/einstellungen.component';
import { BenutzerProfilComponent } from './benutzer-profil/benutzer-profil.component';
import { ApplicationUsersComponent } from './application-users/application-users.component';
import { LoginComponent } from './login/login.component';
import { ApplicationRolesComponent } from './application-roles/application-roles.component';
import { RegisterApplicationUserComponent } from './register-application-user/register-application-user.component';
import { AddApplicationRoleComponent } from './add-application-role/add-application-role.component';
import { AddApplicationUserComponent } from './add-application-user/add-application-user.component';
import { EditApplicationUserComponent } from './edit-application-user/edit-application-user.component';
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
import { IbsiKurseComponent } from './ibsi-kurse/ibsi-kurse.component';
import { AddIbsiKurseThemenComponent } from './add-ibsi-kurse-themen/add-ibsi-kurse-themen.component';
import { AddIbsiKurseComponent } from './add-ibsi-kurse/add-ibsi-kurse.component';
import { EditIbsiKurseComponent } from './edit-ibsi-kurse/edit-ibsi-kurse.component';
import { EditIbsiKurseThemenComponent } from './edit-ibsi-kurse-themen/edit-ibsi-kurse-themen.component';
import { IbsiTextbausteineAutorenComponent } from './ibsi-textbausteine-autoren/ibsi-textbausteine-autoren.component';
import { EinstellungenAutorenNeuComponent } from './einstellungen-autoren-neu/einstellungen-autoren-neu.component';
import { EinstellungenAutorenBearbeitenComponent } from './einstellungen-autoren-bearbeiten/einstellungen-autoren-bearbeiten.component';

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
        path: 'benutzer-neu-rolle',
        canActivate: [AuthGuard],
        data: {
          roles: ['Authenticated'],
        },
        component: BenutzerNeuRolleComponent
      },
      {
        path: 'benutzer-bearbeiten/:Id',
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
        path: 'ibsi-kurse',
        canActivate: [AuthGuard],
        data: {
          roles: ['Authenticated'],
        },
        component: IbsiKurseComponent
      },
      {
        path: 'add-ibsi-kurse-themen/:KursNr',
        canActivate: [AuthGuard],
        data: {
          roles: ['Authenticated'],
        },
        component: AddIbsiKurseThemenComponent
      },
      {
        path: 'add-ibsi-kurse',
        canActivate: [AuthGuard],
        data: {
          roles: ['Authenticated'],
        },
        component: AddIbsiKurseComponent
      },
      {
        path: 'edit-ibsi-kurse/:KursNr',
        canActivate: [AuthGuard],
        data: {
          roles: ['Authenticated'],
        },
        component: EditIbsiKurseComponent
      },
      {
        path: 'edit-ibsi-kurse-themen/:KursThemaNr',
        canActivate: [AuthGuard],
        data: {
          roles: ['Authenticated'],
        },
        component: EditIbsiKurseThemenComponent
      },
      {
        path: 'ibsi-textbausteine-autoren',
        canActivate: [AuthGuard],
        data: {
          roles: ['Authenticated'],
        },
        component: IbsiTextbausteineAutorenComponent
      },
      {
        path: 'einstellungen-autoren-neu',
        canActivate: [AuthGuard],
        data: {
          roles: ['Authenticated'],
        },
        component: EinstellungenAutorenNeuComponent
      },
      {
        path: 'einstellungen-autoren-bearbeiten/:AutorNr',
        canActivate: [AuthGuard],
        data: {
          roles: ['Authenticated'],
        },
        component: EinstellungenAutorenBearbeitenComponent
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
