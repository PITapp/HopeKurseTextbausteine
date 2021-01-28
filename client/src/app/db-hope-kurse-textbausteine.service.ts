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

  deleteBenutzer(benutzerId: string | null) : Observable<any> {
    return this.odata.delete(`/Benutzers('${encodeURIComponent(benutzerId)}')`, item => !(item.BenutzerID == benutzerId));
  }

  getBenutzerByBenutzerId(expand: string | null, benutzerId: string | null) : Observable<any> {
    return this.odata.getById(`/Benutzers('${encodeURIComponent(benutzerId)}')`, { expand });
  }

  updateBenutzer(expand: string | null, benutzerId: string | null, benutzer: models.Benutzer | null) : Observable<any> {
    return this.odata.patch(`/Benutzers('${encodeURIComponent(benutzerId)}')`, benutzer, item => item.BenutzerID == benutzerId, { expand }, ['Base']);
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

  getVwBenutzerRollens(filter: string | null, top: number | null, skip: number | null, orderby: string | null, count: boolean | null, expand: string | null, format: string | null, select: string | null) : Observable<any> {
    return this.odata.get(`/VwBenutzerRollens`, { filter, top, skip, orderby, count, expand, format, select });
  }
}
