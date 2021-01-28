export interface Base {
  BaseID: number;
  AnredeID: number;
  Name1: string;
  Name2: string;
  NameGesamt: string;
  NameVorNach: string;
  NameKuerzel: string;
  TitelVorne: string;
  TitelHinten: string;
  Strasse: string;
  PLZ: string;
  Ort: string;
  Geburtsdatum: string;
  Versicherungsnummer: string;
  Staatsangehoerigkeit: string;
  Telefon1: string;
  Telefon2: string;
  EMail1: string;
  EMail2: string;
  Webseite: string;
  BildURL: string;
  Info: string;
}

export interface BaseAnreden {
  AnredeID: number;
  Anrede: string;
}

export interface Benutzer {
  BenutzerID: string;
  BaseID: number;
  AspNetUsers_Id: string;
  Benutzername: string;
  Kennwort: string;
  Initialen: string;
  BenutzerEMail: string;
  Notiz: string;
  LetzteKundenID: number;
  LetzteMitarbeiterID: number;
  LetzteBaseID: number;
  LetzteBenutzerID: number;
}

export interface InfotexteHtml {
  InfotextID: number;
  Code: string;
  Titel: string;
  Inhalt: string;
  Sortierung: number;
}

export interface VwBenutzerRollen {
  BenutzerID: string;
  BaseID: number;
  Name1: string;
  Name2: string;
  NameGesamt: string;
  Benutzername: string;
  Initialen: string;
  BenutzerEMail: string;
  RoleId: string;
  Benutzerrolle: string;
}
