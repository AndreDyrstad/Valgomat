import { Component } from '@angular/core';
import {HttpService} from '../http-service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-issues2',
  templateUrl: './issues2.component.html',
  styleUrls: ['./issues2.component.css']
})
export class Issues2Component {

  title = 'Tilbud ved problemstillinger knyttet til';
  constructor (private _httpService: HttpService) {}
  getData: string;
  postData: string;
  result: string;
  boxesText = ['Arm-/håndfunksjon', 'Spastisitet', 'Smerte', 'Fatigue', 'Blærefunksjonen', 'Tarmfunksjon', 'Depresjon/angst', 'Kognitiv funksjon', 'Søvn', 'Tale/språk/svelg', 'Lungefunksjon', 'Seksualfunksjon'];


  registerUser(form: NgForm) {
    this._httpService.sendIssues2(form.value)
      .subscribe(
        data => this.postData = JSON.stringify(data),
        error => alert(error),
        () => console.log('Done!')
      );
  }
  getTest() {
    this._httpService.getData()
      .subscribe(
        data => this.getData = JSON.stringify(data),
        error => alert(error),
        () => console.log('Done!')
      );
  }
  postTest() {
    this._httpService.sendData()
      .subscribe(
        data => this.postData = JSON.stringify(data),
        error => alert(error),
        () => console.log('Done!')
      );
  }
}
