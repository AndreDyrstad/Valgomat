import {Injectable} from '@angular/core';
import {map} from 'rxjs/operator/map';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class HttpService{
  constructor(private _http: HttpClient) {}

  sendIssues2(json) {
    return this._http.post('https://valgomatserver.eu-gb.mybluemix.net/api/center', json);
   // return this._http.post('http://localhost:3000/center', json).map(res => res);
  }
  getLocalIssue2() {
    return this._http.get('http://localhost:4200/assets/issues2.json');
  }
  getLocalProfession() {
    return this._http.get('http://localhost:4200/assets/profession.json');
  }
  getLocalType() {
    return this._http.get('http://localhost:4200/assets/stayType.json');
  }
  getLocalIssue() {
    return this._http.get('http://localhost:4200/assets/issue.json');
  }
}
