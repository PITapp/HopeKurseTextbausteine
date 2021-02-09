export interface Base {
  BaseID: number;
  AnredeID: number;
  Name1: string;
  Name2: string;
  NameKuerzel: string;
  TitelVorne: string;
  TitelHinten: string;
  Strasse: string;
  PLZ: string;
  Ort: string;
  LKZ: string;
  Telefon1: string;
  Telefon2: string;
  EMail1: string;
  EMail2: string;
  Website: string;
  BildURL: string;
  Notiz: string;
}

export interface BaseAnreden {
  AnredeID: number;
  Anrede: string;
}

export interface Benutzer {
  BenutzerID: number;
  AspNetUsers_Id: string;
  BaseID: number;
  Benutzername: string;
  Initialen: string;
  BenutzerEMail: string;
  Notiz: string;
}

export interface InfotexteHtml {
  InfotextID: number;
  Code: string;
  Titel: string;
  Inhalt: string;
  Sortierung: number;
}

export interface VwBenutzerRollen {
  BenutzerID: number;
  BaseID: number;
  Name1: string;
  Name2: string;
  Benutzername: string;
  Initialen: string;
  BenutzerEMail: string;
  RoleId: string;
  Benutzerrolle: string;
}
