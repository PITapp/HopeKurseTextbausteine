import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject, throwError } from 'rxjs';

import { ConfigService } from './config.service';
import { ODataClient } from './odata-client';
import * as models from './db-hope-kurse-textbausteine.model';

@Injectable()
export class DbHopeKurseTextbausteineService {
  odata: ODataClient;
  basePath: string;

  constructor(private http: HttpClient, private config: ConfigService) {
    this.basePath = config.get('dbHopeKurseTextbausteine');
    this.odata = new ODataClient(this.http, this.basePath, { legacy: false, withCredentials: true });
  }

  getBases(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null, format: string | null, select: string | null) : Observable<any> {
    return this.odata.get(`/Bases`, { filter, top, skip, orderby, count, expand, format, select });
  }

  createBase(expand: string | null, base: models.Base | null) : Observable<any> {
    return this.odata.post(`/Bases`, base, { expand }, ['BaseAnreden']);
  }

  deleteBase(baseId: number | null) : Observable<any> {
    return this.odata.delete(`/Bases(${baseId})`, item => !(item.BaseID == baseId));
  }

  getBaseByBaseId(expand: string | null, baseId: number | null) : Observable<any> {
    return this.odata.getById(`/Bases(${baseId})`, { expand });
  }

  updateBase(expand: string | null, baseId: number | null, base: models.Base | null) : Observable<any> {
    return this.odata.patch(`/Bases(${baseId})`, base, item => item.BaseID == baseId, { expand }, ['BaseAnreden']);
  }

  getBaseAnredens(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null, format: string | null, select: string | null) : Observable<any> {
    return this.odata.get(`/BaseAnredens`, { filter, top, skip, orderby, count, expand, format, select });
  }

  createBaseAnreden(expand: string | null, baseAnreden: models.BaseAnreden | null) : Observable<any> {
    return this.odata.post(`/BaseAnredens`, baseAnreden, { expand }, []);
  }

  deleteBaseAnreden(anredeId: number | null) : Observable<any> {
    return this.odata.delete(`/BaseAnredens(${anredeId})`, item => !(item.AnredeID == anredeId));
  }

  getBaseAnredenByAnredeId(expand: string | null, anredeId: number | null) : Observable<any> {
    return this.odata.getById(`/BaseAnredens(${anredeId})`, { expand });
  }

  updateBaseAnreden(expand: string | null, anredeId: number | null, baseAnreden: models.BaseAnreden | null) : Observable<any> {
    return this.odata.patch(`/BaseAnredens(${anredeId})`, baseAnreden, item => item.AnredeID == anredeId, { expand }, []);
  }

  getBenutzers(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null, format: string | null, select: string | null) : Observable<any> {
    return this.odata.get(`/Benutzers`, { filter, top, skip, orderby, count, expand, format, select });
  }

  createBenutzer(expand: string | null, benutzer: models.Benutzer | null) : Observable<any> {
    return this.odata.post(`/Benutzers`, benutzer, { expand }, ['Base']);
  }

  deleteBenutzer(benutzerId: number | null) : Observable<any> {
    return this.odata.delete(`/Benutzers(${benutzerId})`, item => !(item.BenutzerID == benutzerId));
  }

  getBenutzerByBenutzerId(expand: string | null, benutzerId: number | null) : Observable<any> {
    return this.odata.getById(`/Benutzers(${benutzerId})`, { expand });
  }

  updateBenutzer(expand: string | null, benutzerId: number | null, benutzer: models.Benutzer | null) : Observable<any> {
    return this.odata.patch(`/Benutzers(${benutzerId})`, benutzer, item => item.BenutzerID == benutzerId, { expand }, ['Base']);
  }

  getBenutzerTextbausteineFavoritens(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null, format: string | null, select: string | null) : Observable<any> {
    return this.odata.get(`/BenutzerTextbausteineFavoritens`, { filter, top, skip, orderby, count, expand, format, select });
  }

  createBenutzerTextbausteineFavoriten(expand: string | null, benutzerTextbausteineFavoriten: models.BenutzerTextbausteineFavoriten | null) : Observable<any> {
    return this.odata.post(`/BenutzerTextbausteineFavoritens`, benutzerTextbausteineFavoriten, { expand }, ['Benutzer', 'IbsiTextbausteine']);
  }

  deleteBenutzerTextbausteineFavoriten(textbausteineFavoritId: number | null) : Observable<any> {
    return this.odata.delete(`/BenutzerTextbausteineFavoritens(${textbausteineFavoritId})`, item => !(item.TextbausteineFavoritID == textbausteineFavoritId));
  }

  getBenutzerTextbausteineFavoritenByTextbausteineFavoritId(expand: string | null, textbausteineFavoritId: number | null) : Observable<any> {
    return this.odata.getById(`/BenutzerTextbausteineFavoritens(${textbausteineFavoritId})`, { expand });
  }

  updateBenutzerTextbausteineFavoriten(expand: string | null, textbausteineFavoritId: number | null, benutzerTextbausteineFavoriten: models.BenutzerTextbausteineFavoriten | null) : Observable<any> {
    return this.odata.patch(`/BenutzerTextbausteineFavoritens(${textbausteineFavoritId})`, benutzerTextbausteineFavoriten, item => item.TextbausteineFavoritID == textbausteineFavoritId, { expand }, ['Benutzer','IbsiTextbausteine']);
  }

  getBenutzerTextbausteineVerlaufs(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null, format: string | null, select: string | null) : Observable<any> {
    return this.odata.get(`/BenutzerTextbausteineVerlaufs`, { filter, top, skip, orderby, count, expand, format, select });
  }

  createBenutzerTextbausteineVerlauf(expand: string | null, benutzerTextbausteineVerlauf: models.BenutzerTextbausteineVerlauf | null) : Observable<any> {
    return this.odata.post(`/BenutzerTextbausteineVerlaufs`, benutzerTextbausteineVerlauf, { expand }, ['Benutzer', 'IbsiTextbausteine']);
  }

  deleteBenutzerTextbausteineVerlauf(textbausteineVerlaufId: number | null) : Observable<any> {
    return this.odata.delete(`/BenutzerTextbausteineVerlaufs(${textbausteineVerlaufId})`, item => !(item.TextbausteineVerlaufID == textbausteineVerlaufId));
  }

  getBenutzerTextbausteineVerlaufByTextbausteineVerlaufId(expand: string | null, textbausteineVerlaufId: number | null) : Observable<any> {
    return this.odata.getById(`/BenutzerTextbausteineVerlaufs(${textbausteineVerlaufId})`, { expand });
  }

  updateBenutzerTextbausteineVerlauf(expand: string | null, textbausteineVerlaufId: number | null, benutzerTextbausteineVerlauf: models.BenutzerTextbausteineVerlauf | null) : Observable<any> {
    return this.odata.patch(`/BenutzerTextbausteineVerlaufs(${textbausteineVerlaufId})`, benutzerTextbausteineVerlauf, item => item.TextbausteineVerlaufID == textbausteineVerlaufId, { expand }, ['Benutzer','IbsiTextbausteine']);
  }

  getEinstellungens(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null, format: string | null, select: string | null) : Observable<any> {
    return this.odata.get(`/Einstellungens`, { filter, top, skip, orderby, count, expand, format, select });
  }

  createEinstellungen(expand: string | null, einstellungen: models.Einstellungen | null) : Observable<any> {
    return this.odata.post(`/Einstellungens`, einstellungen, { expand }, []);
  }

  deleteEinstellungen(einstellungenId: number | null) : Observable<any> {
    return this.odata.delete(`/Einstellungens(${einstellungenId})`, item => !(item.EinstellungenID == einstellungenId));
  }

  getEinstellungenByEinstellungenId(expand: string | null, einstellungenId: number | null) : Observable<any> {
    return this.odata.getById(`/Einstellungens(${einstellungenId})`, { expand });
  }

  updateEinstellungen(expand: string | null, einstellungenId: number | null, einstellungen: models.Einstellungen | null) : Observable<any> {
    return this.odata.patch(`/Einstellungens(${einstellungenId})`, einstellungen, item => item.EinstellungenID == einstellungenId, { expand }, []);
  }

  getIbsiKurses(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null, format: string | null, select: string | null) : Observable<any> {
    return this.odata.get(`/IbsiKurses`, { filter, top, skip, orderby, count, expand, format, select });
  }

  createIbsiKurse(expand: string | null, ibsiKurse: models.IbsiKurse | null) : Observable<any> {
    return this.odata.post(`/IbsiKurses`, ibsiKurse, { expand }, ['IbsiKurseArten']);
  }

  deleteIbsiKurse(kursNr: number | null) : Observable<any> {
    return this.odata.delete(`/IbsiKurses(${kursNr})`, item => !(item.KursNr == kursNr));
  }

  getIbsiKurseByKursNr(expand: string | null, kursNr: number | null) : Observable<any> {
    return this.odata.getById(`/IbsiKurses(${kursNr})`, { expand });
  }

  updateIbsiKurse(expand: string | null, kursNr: number | null, ibsiKurse: models.IbsiKurse | null) : Observable<any> {
    return this.odata.patch(`/IbsiKurses(${kursNr})`, ibsiKurse, item => item.KursNr == kursNr, { expand }, ['IbsiKurseArten']);
  }

  getIbsiKurseArtens(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null, format: string | null, select: string | null) : Observable<any> {
    return this.odata.get(`/IbsiKurseArtens`, { filter, top, skip, orderby, count, expand, format, select });
  }

  createIbsiKurseArten(expand: string | null, ibsiKurseArten: models.IbsiKurseArten | null) : Observable<any> {
    return this.odata.post(`/IbsiKurseArtens`, ibsiKurseArten, { expand }, []);
  }

  deleteIbsiKurseArten(kursArtNr: number | null) : Observable<any> {
    return this.odata.delete(`/IbsiKurseArtens(${kursArtNr})`, item => !(item.KursArtNr == kursArtNr));
  }

  getIbsiKurseArtenByKursArtNr(expand: string | null, kursArtNr: number | null) : Observable<any> {
    return this.odata.getById(`/IbsiKurseArtens(${kursArtNr})`, { expand });
  }

  updateIbsiKurseArten(expand: string | null, kursArtNr: number | null, ibsiKurseArten: models.IbsiKurseArten | null) : Observable<any> {
    return this.odata.patch(`/IbsiKurseArtens(${kursArtNr})`, ibsiKurseArten, item => item.KursArtNr == kursArtNr, { expand }, []);
  }

  getIbsiKurseThemens(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null, format: string | null, select: string | null) : Observable<any> {
    return this.odata.get(`/IbsiKurseThemens`, { filter, top, skip, orderby, count, expand, format, select });
  }

  createIbsiKurseThemen(expand: string | null, ibsiKurseThemen: models.IbsiKurseThemen | null) : Observable<any> {
    return this.odata.post(`/IbsiKurseThemens`, ibsiKurseThemen, { expand }, ['IbsiKurse']);
  }

  deleteIbsiKurseThemen(kursThemaNr: number | null) : Observable<any> {
    return this.odata.delete(`/IbsiKurseThemens(${kursThemaNr})`, item => !(item.KursThemaNr == kursThemaNr));
  }

  getIbsiKurseThemenByKursThemaNr(expand: string | null, kursThemaNr: number | null) : Observable<any> {
    return this.odata.getById(`/IbsiKurseThemens(${kursThemaNr})`, { expand });
  }

  updateIbsiKurseThemen(expand: string | null, kursThemaNr: number | null, ibsiKurseThemen: models.IbsiKurseThemen | null) : Observable<any> {
    return this.odata.patch(`/IbsiKurseThemens(${kursThemaNr})`, ibsiKurseThemen, item => item.KursThemaNr == kursThemaNr, { expand }, ['IbsiKurse']);
  }

  getIbsiTextbausteines(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null, format: string | null, select: string | null) : Observable<any> {
    return this.odata.get(`/IbsiTextbausteines`, { filter, top, skip, orderby, count, expand, format, select });
  }

  createIbsiTextbausteine(expand: string | null, ibsiTextbausteine: models.IbsiTextbausteine | null) : Observable<any> {
    return this.odata.post(`/IbsiTextbausteines`, ibsiTextbausteine, { expand }, ['IbsiTextbausteineAnreden', 'IbsiTextbausteineStatusForm', 'IbsiTextbausteineStatusInhalt', 'IbsiKurse', 'IbsiTextbausteineArten', 'IbsiTextbausteineAutoren', 'IbsiTextbausteineTypen']);
  }

  deleteIbsiTextbausteine(textbausteinNr: number | null) : Observable<any> {
    return this.odata.delete(`/IbsiTextbausteines(${textbausteinNr})`, item => !(item.TextbausteinNr == textbausteinNr));
  }

  getIbsiTextbausteineByTextbausteinNr(expand: string | null, textbausteinNr: number | null) : Observable<any> {
    return this.odata.getById(`/IbsiTextbausteines(${textbausteinNr})`, { expand });
  }

  updateIbsiTextbausteine(expand: string | null, textbausteinNr: number | null, ibsiTextbausteine: models.IbsiTextbausteine | null) : Observable<any> {
    return this.odata.patch(`/IbsiTextbausteines(${textbausteinNr})`, ibsiTextbausteine, item => item.TextbausteinNr == textbausteinNr, { expand }, ['IbsiTextbausteineAnreden','IbsiTextbausteineStatusForm','IbsiTextbausteineStatusInhalt','IbsiKurse','IbsiTextbausteineArten','IbsiTextbausteineAutoren','IbsiTextbausteineTypen']);
  }

  getIbsiTextbausteineAnredens(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null, format: string | null, select: string | null) : Observable<any> {
    return this.odata.get(`/IbsiTextbausteineAnredens`, { filter, top, skip, orderby, count, expand, format, select });
  }

  createIbsiTextbausteineAnreden(expand: string | null, ibsiTextbausteineAnreden: models.IbsiTextbausteineAnreden | null) : Observable<any> {
    return this.odata.post(`/IbsiTextbausteineAnredens`, ibsiTextbausteineAnreden, { expand }, []);
  }

  deleteIbsiTextbausteineAnreden(anrede: string | null) : Observable<any> {
    return this.odata.delete(`/IbsiTextbausteineAnredens('${encodeURIComponent(anrede)}')`, item => !(item.Anrede == anrede));
  }

  getIbsiTextbausteineAnredenByAnrede(expand: string | null, anrede: string | null) : Observable<any> {
    return this.odata.getById(`/IbsiTextbausteineAnredens('${encodeURIComponent(anrede)}')`, { expand });
  }

  updateIbsiTextbausteineAnreden(expand: string | null, anrede: string | null, ibsiTextbausteineAnreden: models.IbsiTextbausteineAnreden | null) : Observable<any> {
    return this.odata.patch(`/IbsiTextbausteineAnredens('${encodeURIComponent(anrede)}')`, ibsiTextbausteineAnreden, item => item.Anrede == anrede, { expand }, []);
  }

  getIbsiTextbausteineArtens(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null, format: string | null, select: string | null) : Observable<any> {
    return this.odata.get(`/IbsiTextbausteineArtens`, { filter, top, skip, orderby, count, expand, format, select });
  }

  createIbsiTextbausteineArten(expand: string | null, ibsiTextbausteineArten: models.IbsiTextbausteineArten | null) : Observable<any> {
    return this.odata.post(`/IbsiTextbausteineArtens`, ibsiTextbausteineArten, { expand }, []);
  }

  deleteIbsiTextbausteineArten(textbausteinArtCode: string | null) : Observable<any> {
    return this.odata.delete(`/IbsiTextbausteineArtens('${encodeURIComponent(textbausteinArtCode)}')`, item => !(item.TextbausteinArtCode == textbausteinArtCode));
  }

  getIbsiTextbausteineArtenByTextbausteinArtCode(expand: string | null, textbausteinArtCode: string | null) : Observable<any> {
    return this.odata.getById(`/IbsiTextbausteineArtens('${encodeURIComponent(textbausteinArtCode)}')`, { expand });
  }

  updateIbsiTextbausteineArten(expand: string | null, textbausteinArtCode: string | null, ibsiTextbausteineArten: models.IbsiTextbausteineArten | null) : Observable<any> {
    return this.odata.patch(`/IbsiTextbausteineArtens('${encodeURIComponent(textbausteinArtCode)}')`, ibsiTextbausteineArten, item => item.TextbausteinArtCode == textbausteinArtCode, { expand }, []);
  }

  getIbsiTextbausteineAutorens(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null, format: string | null, select: string | null) : Observable<any> {
    return this.odata.get(`/IbsiTextbausteineAutorens`, { filter, top, skip, orderby, count, expand, format, select });
  }

  createIbsiTextbausteineAutoren(expand: string | null, ibsiTextbausteineAutoren: models.IbsiTextbausteineAutoren | null) : Observable<any> {
    return this.odata.post(`/IbsiTextbausteineAutorens`, ibsiTextbausteineAutoren, { expand }, []);
  }

  deleteIbsiTextbausteineAutoren(autorNr: number | null) : Observable<any> {
    return this.odata.delete(`/IbsiTextbausteineAutorens(${autorNr})`, item => !(item.AutorNr == autorNr));
  }

  getIbsiTextbausteineAutorenByAutorNr(expand: string | null, autorNr: number | null) : Observable<any> {
    return this.odata.getById(`/IbsiTextbausteineAutorens(${autorNr})`, { expand });
  }

  updateIbsiTextbausteineAutoren(expand: string | null, autorNr: number | null, ibsiTextbausteineAutoren: models.IbsiTextbausteineAutoren | null) : Observable<any> {
    return this.odata.patch(`/IbsiTextbausteineAutorens(${autorNr})`, ibsiTextbausteineAutoren, item => item.AutorNr == autorNr, { expand }, []);
  }

  getIbsiTextbausteineFelders(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null, format: string | null, select: string | null) : Observable<any> {
    return this.odata.get(`/IbsiTextbausteineFelders`, { filter, top, skip, orderby, count, expand, format, select });
  }

  createIbsiTextbausteineFelder(expand: string | null, ibsiTextbausteineFelder: models.IbsiTextbausteineFelder | null) : Observable<any> {
    return this.odata.post(`/IbsiTextbausteineFelders`, ibsiTextbausteineFelder, { expand }, []);
  }

  deleteIbsiTextbausteineFelder(feldId: number | null) : Observable<any> {
    return this.odata.delete(`/IbsiTextbausteineFelders(${feldId})`, item => !(item.FeldID == feldId));
  }

  getIbsiTextbausteineFelderByFeldId(expand: string | null, feldId: number | null) : Observable<any> {
    return this.odata.getById(`/IbsiTextbausteineFelders(${feldId})`, { expand });
  }

  updateIbsiTextbausteineFelder(expand: string | null, feldId: number | null, ibsiTextbausteineFelder: models.IbsiTextbausteineFelder | null) : Observable<any> {
    return this.odata.patch(`/IbsiTextbausteineFelders(${feldId})`, ibsiTextbausteineFelder, item => item.FeldID == feldId, { expand }, []);
  }

  getIbsiTextbausteineStatusForms(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null, format: string | null, select: string | null) : Observable<any> {
    return this.odata.get(`/IbsiTextbausteineStatusForms`, { filter, top, skip, orderby, count, expand, format, select });
  }

  createIbsiTextbausteineStatusForm(expand: string | null, ibsiTextbausteineStatusForm: models.IbsiTextbausteineStatusForm | null) : Observable<any> {
    return this.odata.post(`/IbsiTextbausteineStatusForms`, ibsiTextbausteineStatusForm, { expand }, []);
  }

  deleteIbsiTextbausteineStatusForm(status: number | null) : Observable<any> {
    return this.odata.delete(`/IbsiTextbausteineStatusForms(${status})`, item => !(item.Status == status));
  }

  getIbsiTextbausteineStatusFormByStatus(expand: string | null, status: number | null) : Observable<any> {
    return this.odata.getById(`/IbsiTextbausteineStatusForms(${status})`, { expand });
  }

  updateIbsiTextbausteineStatusForm(expand: string | null, status: number | null, ibsiTextbausteineStatusForm: models.IbsiTextbausteineStatusForm | null) : Observable<any> {
    return this.odata.patch(`/IbsiTextbausteineStatusForms(${status})`, ibsiTextbausteineStatusForm, item => item.Status == status, { expand }, []);
  }

  getIbsiTextbausteineStatusInhalts(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null, format: string | null, select: string | null) : Observable<any> {
    return this.odata.get(`/IbsiTextbausteineStatusInhalts`, { filter, top, skip, orderby, count, expand, format, select });
  }

  createIbsiTextbausteineStatusInhalt(expand: string | null, ibsiTextbausteineStatusInhalt: models.IbsiTextbausteineStatusInhalt | null) : Observable<any> {
    return this.odata.post(`/IbsiTextbausteineStatusInhalts`, ibsiTextbausteineStatusInhalt, { expand }, []);
  }

  deleteIbsiTextbausteineStatusInhalt(statusInhalt: number | null) : Observable<any> {
    return this.odata.delete(`/IbsiTextbausteineStatusInhalts(${statusInhalt})`, item => !(item.StatusInhalt == statusInhalt));
  }

  getIbsiTextbausteineStatusInhaltByStatusInhalt(expand: string | null, statusInhalt: number | null) : Observable<any> {
    return this.odata.getById(`/IbsiTextbausteineStatusInhalts(${statusInhalt})`, { expand });
  }

  updateIbsiTextbausteineStatusInhalt(expand: string | null, statusInhalt: number | null, ibsiTextbausteineStatusInhalt: models.IbsiTextbausteineStatusInhalt | null) : Observable<any> {
    return this.odata.patch(`/IbsiTextbausteineStatusInhalts(${statusInhalt})`, ibsiTextbausteineStatusInhalt, item => item.StatusInhalt == statusInhalt, { expand }, []);
  }

  getIbsiTextbausteineTypens(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null, format: string | null, select: string | null) : Observable<any> {
    return this.odata.get(`/IbsiTextbausteineTypens`, { filter, top, skip, orderby, count, expand, format, select });
  }

  createIbsiTextbausteineTypen(expand: string | null, ibsiTextbausteineTypen: models.IbsiTextbausteineTypen | null) : Observable<any> {
    return this.odata.post(`/IbsiTextbausteineTypens`, ibsiTextbausteineTypen, { expand }, []);
  }

  deleteIbsiTextbausteineTypen(typ: string | null) : Observable<any> {
    return this.odata.delete(`/IbsiTextbausteineTypens('${encodeURIComponent(typ)}')`, item => !(item.Typ == typ));
  }

  getIbsiTextbausteineTypenByTyp(expand: string | null, typ: string | null) : Observable<any> {
    return this.odata.getById(`/IbsiTextbausteineTypens('${encodeURIComponent(typ)}')`, { expand });
  }

  updateIbsiTextbausteineTypen(expand: string | null, typ: string | null, ibsiTextbausteineTypen: models.IbsiTextbausteineTypen | null) : Observable<any> {
    return this.odata.patch(`/IbsiTextbausteineTypens('${encodeURIComponent(typ)}')`, ibsiTextbausteineTypen, item => item.Typ == typ, { expand }, []);
  }

  getInfotexteHtmls(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null, format: string | null, select: string | null) : Observable<any> {
    return this.odata.get(`/InfotexteHtmls`, { filter, top, skip, orderby, count, expand, format, select });
  }

  createInfotexteHtml(expand: string | null, infotexteHtml: models.InfotexteHtml | null) : Observable<any> {
    return this.odata.post(`/InfotexteHtmls`, infotexteHtml, { expand }, []);
  }

  deleteInfotexteHtml(infotextId: number | null) : Observable<any> {
    return this.odata.delete(`/InfotexteHtmls(${infotextId})`, item => !(item.InfotextID == infotextId));
  }

  getInfotexteHtmlByInfotextId(expand: string | null, infotextId: number | null) : Observable<any> {
    return this.odata.getById(`/InfotexteHtmls(${infotextId})`, { expand });
  }

  updateInfotexteHtml(expand: string | null, infotextId: number | null, infotexteHtml: models.InfotexteHtml | null) : Observable<any> {
    return this.odata.patch(`/InfotexteHtmls(${infotextId})`, infotexteHtml, item => item.InfotextID == infotextId, { expand }, []);
  }

  getVwBaseAlles(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null, format: string | null, select: string | null) : Observable<any> {
    return this.odata.get(`/VwBaseAlles`, { filter, top, skip, orderby, count, expand, format, select });
  }

  getVwBenutzerRollens(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null, format: string | null, select: string | null) : Observable<any> {
    return this.odata.get(`/VwBenutzerRollens`, { filter, top, skip, orderby, count, expand, format, select });
  }

  getVwBenutzerTextbausteineFavoritens(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null, format: string | null, select: string | null) : Observable<any> {
    return this.odata.get(`/VwBenutzerTextbausteineFavoritens`, { filter, top, skip, orderby, count, expand, format, select });
  }

  getVwBenutzerTextbausteineVerlaufs(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null, format: string | null, select: string | null) : Observable<any> {
    return this.odata.get(`/VwBenutzerTextbausteineVerlaufs`, { filter, top, skip, orderby, count, expand, format, select });
  }

  getVwRollens(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null, format: string | null, select: string | null) : Observable<any> {
    return this.odata.get(`/VwRollens`, { filter, top, skip, orderby, count, expand, format, select });
  }
}
