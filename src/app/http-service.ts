import {Injectable} from '@angular/core';
import {map} from 'rxjs/operator/map';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class HttpService{
  constructor(private _http: HttpClient) {}
  getData() {
    return this._http.get('http://localhost:3000/center')
      .map(res => res);
  }
  sendData() {
    const json = ({var1: 'test', var2: 3});
    const params = 'json=' + json;
    const headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    return this._http.post('http://localhost:3000/center', json).map(res => res);
  }
  sendIssues2(json) {
    return this._http.post('http://localhost:3000/center/issues2', json).map(res => res);
  }
}
