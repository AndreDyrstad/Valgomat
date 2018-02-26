import { Component } from '@angular/core';
import {HttpService} from '../http-service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.css']
})
export class CenterComponent {
  boxes = ['arm', 'spastisitet', 'pain', 'fatigue', 'blather', 'intestine', 'depression', 'kognitiv', 'sleep', 'speech', 'lungs', 'sexual'];
  boxesText = ['Arm-/håndfunksjon', 'Spastisitet', 'Smerte', 'Fatigue', 'Blærefunksjonen', 'Tarmfunksjon', 'Depresjon/angst', 'Kognitiv funksjon', 'Søvn', 'Tale/språk/svelg', 'Lungefunksjon', 'Seksualfunksjon'];
  title = 'Tilbud ved problemstillinger knyttet til';
  regions = ['Helse Nord', 'Helse midt', 'Helse vest', 'Helse Sør-Øst'];
  type = ['Informasjon', 'Vurdering', 'Rehabilitering etter raskt funksjonstap', 'Rehabilitering etter gradvis funksjonstap', 'Egne tilbud til voksne pårørende', 'Egne tilbud til barn som pårørende'];
  profesion = ['Lege', 'Sykepleier', 'Hjelpepleier/helsefagarbeider', 'Klinisk psykolog', 'Nevropsykolog', 'Sosionom' , 'Ergoterapeut', 'Fysioterapeut', 'Ernæringsfysiolog', 'Uroterapeut', 'Logoped', 'Idrettspedagog'];

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
}
