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
  BaseID: number;
  Benutzername: string;
  AspNetUsers_Id: string;
  Initialen: string;
  BenutzerEMail: string;
  LKZ: string;
  Notiz: string;
  FilterTextbausteinArtCode: string;
  FilterKursNr: number;
  FilterTitelUndText: string;
  FilterAutorNr: number;
  FilterThemaNummer: number;
  FilterAnrede: string;
  FilterDokument: string;
  FilterInfo: string;
}

export interface BenutzerTextbausteineFavoriten {
  TextbausteineFavoritID: number;
  BenutzerID: number;
  TextbausteinNr: number;
  Am: string;
}

export interface BenutzerTextbausteineVerlauf {
  TextbausteineVerlaufID: number;
  BenutzerID: number;
  TextbausteinNr: number;
  Am: string;
}

export interface Einstellungen {
  EinstellungenID: number;
  PfadDokumenteTextbausteine: string;
}

export interface IbsiKurse {
  KursNr: number;
  KursArtNr: number;
  Titel: string;
  Untertitel: string;
  Kurzzeichen: string;
  KurzzeichenD: string;
  KurzzeichenCH: string;
  Beschreibung: string;
  AnzahlThemen: number;
  Printkurs: boolean;
  Onlinekurs: boolean;
  KursinhaltAnrede: string;
}

export interface IbsiKurseArten {
  KursArtNr: number;
  Bezeichnung: string;
  Sortierung: number;
}

export interface IbsiKurseThemen {
  KursThemaNr: number;
  KursNr: number;
  Nummer: number;
  Titel: string;
  Untertitel: string;
  Kurzbeschreibung: string;
  Begleitmaterial: string;
  Druckfehler: string;
  InfoMemo: string;
}

export interface IbsiTextbausteine {
  TextbausteinNr: number;
  Anrede: string;
  Status: number;
  StatusInhalt: number;
  KursNr: number;
  TextbausteinArtCode: string;
  AutorNr: number;
  Typ: string;
  TitelTextbaustein: string;
  UntertitelTextbaustein: string;
  Land: string;
  ThemaNummer: number;
  TextbausteinHTML: string;
  DokumentTitel: string;
  DokumentName: string;
  DokumentTyp: string;
  DokumentErstelltVon: string;
  DokumentErstelltAm: string;
  SeiteHhe: number;
  SeiteBreite: number;
  RandOben: number;
  RandRechts: number;
  RandUnten: number;
  RandLinks: number;
  nderungsdatum: string;
  Ordner: string;
  InfoText: string;
}

export interface IbsiTextbausteineAnreden {
  Anrede: string;
  Bezeichnung: string;
  Sortierung: number;
}

export interface IbsiTextbausteineArten {
  TextbausteinArtCode: string;
  Bezeichnung: string;
  AuswahlKurs: boolean;
  AuswahlThemaNummer: boolean;
  Sortierung: number;
}

export interface IbsiTextbausteineAutoren {
  AutorNr: number;
  Name: string;
  Krzel: string;
}

export interface IbsiTextbausteineFelder {
  FeldID: number;
  Titel: string;
  Sortierung: number;
}

export interface IbsiTextbausteineStatusForm {
  Status: number;
  Bezeichnung: string;
}

export interface IbsiTextbausteineStatusInhalt {
  StatusInhalt: number;
  Bezeichnung: string;
}

export interface IbsiTextbausteineTypen {
  Typ: string;
  Bezeichnung: string;
}

export interface InfotexteHtml {
  InfotextID: number;
  Code: string;
  Titel: string;
  Inhalt: string;
  Sortierung: number;
}

export interface VwBaseAlle {
  BaseID: number;
  Name1: string;
  Name2: string;
  NameKuerzel: string;
  AnredeID: number;
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
  NameGesamt: string;
}

export interface VwBenutzerRollen {
  BenutzerID: number;
  AspNetUsers_Id: string;
  BaseID: number;
  Benutzername: string;
  Initialen: string;
  BenutzerEMail: string;
  Notiz: string;
  FilterTextbausteinArtCode: string;
  FilterKursNr: number;
  FilterTitelUndText: string;
  FilterAutorNr: number;
  FilterThemaNummer: number;
  FilterAnrede: string;
  FilterDokument: string;
  FilterInfo: string;
  RoleId: string;
  RolleTitel: string;
}

export interface VwBenutzerTextbausteineFavoriten {
  TextbausteineFavoritID: number;
  BenutzerID: number;
  Am: string;
  TextbausteinNr: number;
  Benutzername: string;
  TitelTextbaustein: string;
  UntertitelTextbaustein: string;
  TextbausteinArtCode: string;
  Anrede: string;
  ThemaNummer: number;
  Land: string;
  InfoText: string;
  Art: string;
  TextbausteinHTML: string;
  DokumentTitel: string;
  DokumentName: string;
  DokumentTyp: string;
  AutorNr: number;
  AutorName: string;
  AutorKrzel: string;
  KursNr: number;
  KursTitel: string;
  KursUntertitel: string;
  KursKurzzeichen: string;
}

export interface VwBenutzerTextbausteineVerlauf {
  TextbausteineVerlaufID: number;
  BenutzerID: number;
  Am: string;
  TextbausteinNr: number;
  Benutzername: string;
  TitelTextbaustein: string;
  UntertitelTextbaustein: string;
  TextbausteinArtCode: string;
  Anrede: string;
  ThemaNummer: number;
  Land: string;
  InfoText: string;
  Art: string;
  TextbausteinHTML: string;
  DokumentTitel: string;
  DokumentName: string;
  DokumentTyp: string;
  AutorNr: number;
  AutorName: string;
  AutorKrzel: string;
  KursNr: number;
  KursTitel: string;
  KursUntertitel: string;
  KursKurzzeichen: string;
}

export interface VwRollen {
  Id: string;
  Titel: string;
}
