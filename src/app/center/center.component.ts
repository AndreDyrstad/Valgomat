import { Component } from '@angular/core';
import {HttpService} from '../http-service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.css']
})
export class CenterComponent {
 listOfIssues;
 listOfProfessions;
 listOfType;
 a = this.getIssues();
 b = this.getProfession();
 c = this.getType()


  title = 'Tilbud ved problemstillinger knyttet til';
  regions = ['Helse Nord', 'Helse midt', 'Helse vest', 'Helse Sør-Øst'];
  type = ['Informasjon', 'Vurdering', 'Rehabilitering etter raskt funksjonstap', 'Rehabilitering etter gradvis funksjonstap', 'Egne tilbud til voksne pårørende', 'Egne tilbud til barn som pårørende'];

  constructor (private _httpService: HttpService) {}
  getData: string;
  postData: string;

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
  getIssues() {
    this._httpService.getLocalIssue()
      .subscribe(
        data => this.listOfIssues = data.issues,
        error => alert(error),
        () => console.log('Done!')
      );
  }
  getProfession() {
    this._httpService.getLocalProfession()
      .subscribe(
        data => this.listOfProfessions = data.profession,
        error => alert(error),
        () => console.log('Done!')
      );
  }
  getType() {
    this._httpService.getLocalType()
      .subscribe(
        data => this.listOfType = data.type,
        error => alert(error),
        () => console.log('Done!')
      );
  }
}
