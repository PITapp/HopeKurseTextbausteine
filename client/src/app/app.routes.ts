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
import { KontakteTemp2Component } from './kontakte-temp-2/kontakte-temp-2.component';
import { AddKontakteComponent } from './add-kontakte/add-kontakte.component';
import { EditKontakteComponent } from './edit-kontakte/edit-kontakte.component';
import { Kontakte2Component } from './kontakte-2/kontakte-2.component';
import { Kontakte3Component } from './kontakte-3/kontakte-3.component';
import { AddKontakte3Component } from './add-kontakte-3/add-kontakte-3.component';
import { EditKontakte3Component } from './edit-kontakte-3/edit-kontakte-3.component';
import { Kontakte4Component } from './kontakte-4/kontakte-4.component';
import { AddKontakte4Component } from './add-kontakte-4/add-kontakte-4.component';
import { EditKontakte4Component } from './edit-kontakte-4/edit-kontakte-4.component';
import { CopyOfKontakteComponent } from './copy-of-kontakte/copy-of-kontakte.component';
import { Kontakte5Component } from './kontakte-5/kontakte-5.component';
import { AddKontakte5Component } from './add-kontakte-5/add-kontakte-5.component';
import { EditKontakte5Component } from './edit-kontakte-5/edit-kontakte-5.component';
import { CopyOfKontakte1Component } from './copy-of-kontakte-1/copy-of-kontakte-1.component';

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
        path: 'kontakte-temp-2',
        canActivate: [AuthGuard],
        data: {
          roles: ['Authenticated'],
        },
        component: KontakteTemp2Component
      },
      {
        path: 'add-kontakte',
        canActivate: [AuthGuard],
        data: {
          roles: ['Authenticated'],
        },
        component: AddKontakteComponent
      },
      {
        path: 'edit-kontakte/:BaseID',
        canActivate: [AuthGuard],
        data: {
          roles: ['Authenticated'],
        },
        component: EditKontakteComponent
      },
      {
        path: 'kontakte-2',
        canActivate: [AuthGuard],
        data: {
          roles: ['Authenticated'],
        },
        component: Kontakte2Component
      },
      {
        path: 'kontakte-3',
        canActivate: [AuthGuard],
        data: {
          roles: ['Authenticated'],
        },
        component: Kontakte3Component
      },
      {
        path: 'add-kontakte-3',
        canActivate: [AuthGuard],
        data: {
          roles: ['Authenticated'],
        },
        component: AddKontakte3Component
      },
      {
        path: 'edit-kontakte-3/:BaseID',
        canActivate: [AuthGuard],
        data: {
          roles: ['Authenticated'],
        },
        component: EditKontakte3Component
      },
      {
        path: 'kontakte-4',
        canActivate: [AuthGuard],
        data: {
          roles: ['Authenticated'],
        },
        component: Kontakte4Component
      },
      {
        path: 'add-kontakte-4',
        canActivate: [AuthGuard],
        data: {
          roles: ['Authenticated'],
        },
        component: AddKontakte4Component
      },
      {
        path: 'edit-kontakte-4/:BaseID',
        canActivate: [AuthGuard],
        data: {
          roles: ['Authenticated'],
        },
        component: EditKontakte4Component
      },
      {
        path: 'copy-of-kontakte',
        canActivate: [AuthGuard],
        data: {
          roles: ['Authenticated'],
        },
        component: CopyOfKontakteComponent
      },
      {
        path: 'kontakte-5',
        canActivate: [AuthGuard],
        data: {
          roles: ['Authenticated'],
        },
        component: Kontakte5Component
      },
      {
        path: 'add-kontakte-5',
        canActivate: [AuthGuard],
        data: {
          roles: ['Authenticated'],
        },
        component: AddKontakte5Component
      },
      {
        path: 'edit-kontakte-5/:BaseID',
        canActivate: [AuthGuard],
        data: {
          roles: ['Authenticated'],
        },
        component: EditKontakte5Component
      },
      {
        path: 'copy-of-kontakte-1',
        canActivate: [AuthGuard],
        data: {
          roles: ['Authenticated'],
        },
        component: CopyOfKontakte1Component
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
