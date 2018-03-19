import { Component } from '@angular/core';
import {HttpService} from '../http-service';
import {NgForm, NgModel} from '@angular/forms';

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.css']
})
export class CenterComponent {
  listOfIssues;
 listOfIssues2;
 listOfProfessions;
 listOfType;
 a = this.getIssues2();
 b = this.getProfession();
 c = this.getType();
 d = this.getIssues();

  title = 'Tilbud ved problemstillinger knyttet til';
  regions = ['Helse Nord', 'Helse Midt-Norge', 'Helse Vest', 'Helse Sør-Øst'];

  constructor (private _httpService: HttpService) {}
  getData: string;
  postData: string;
  dognAlder: boolean;
  dagAlder: boolean;

  registerUser(form: NgForm) {
    this._httpService.sendIssues2(form.value)
      .subscribe(
        data => this.postData = JSON.stringify(data),
        // error => alert(error),
        () => console.log('Done!')
      );
    alert('Takk for svar');
  }
  getIssues() {
    this._httpService.getLocalIssue()
      .subscribe(
        data => this.listOfIssues = data,
        error => alert(error),
        () => console.log('Done!')
      );
  }
  getIssues2() {
    this._httpService.getLocalIssue2()
      .subscribe(
        data => this.listOfIssues2 = data,
        error => alert(error),
        () => console.log('Done!')
      );
  }
  getProfession() {
    this._httpService.getLocalProfession()
      .subscribe(
        data => this.listOfProfessions = data,
        error => alert(error),
        () => console.log('Done!')
      );
  }
  getType() {
    this._httpService.getLocalType()
      .subscribe(
        data => this.listOfType = data,
        error => alert(error),
        () => console.log('Done!')
      );
  }
}
