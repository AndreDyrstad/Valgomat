import {Injectable} from '@angular/core';
import {map} from 'rxjs/operator/map';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class HttpService{
  constructor(private _http: HttpClient) {}
  getData() {
    return this._http.get('https://valgomatserver.eu-gb.mybluemix.net/center')
      .map(res => res);
  }
  sendData() {
    const json = ({var1: 'test', var2: 3});
    const params = 'json=' + json;
    const headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    return this._http.post('https://valgomatserver.eu-gb.mybluemix.net/center', json).map(res => res);
  }
  sendIssues2(json) {
    return this._http.post('https://valgomatserver.eu-gb.mybluemix.net/center', json).map(res => res);
  }
  getLocalIssue() {
    return this._http.get('http://localhost:4200/assets/issues2.json').map(res => res);
  }
  getLocalProfession() {
    return this._http.get('http://localhost:4200/assets/profession.json').map(res => res);
  }
  getLocalType() {
    return this._http.get('http://localhost:4200/assets/stayType.json').map(res => res);
  }
}
