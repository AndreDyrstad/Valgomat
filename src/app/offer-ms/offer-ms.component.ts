import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import 'rxjs/add/operator/map';
import {HttpService} from '../http-service';

@Component({
  selector: 'app-offer-ms',
  templateUrl: './offer-ms.component.html',
  styleUrls: ['./offer-ms.component.css'],
  providers: [HttpService]
})
export class OfferMsComponent {

  title = 'Tilbud til personer med MS';
  type = ['Informasjon', 'Vurdering', 'Rehabilitering etter raskt funksjonstap', 'Rehabilitering etter gradvis funksjonstap', 'Egne tilbud til voksne pårørende', 'Egne tilbud til barn som pårørende'];
  profesion = ['Lege', 'Sykepleier', 'Hjelpepleier/helsefagarbeider', 'Klinisk psykolog', 'Nevropsykolog', 'Sosionom' , 'Ergoterapeut', 'Fysioterapeut', 'Ernæringsfysiolog', 'Uroterapeut', 'Logoped', 'Idrettspedagog'];
  constructor (private _httpService: HttpService) {}
  getData: string;
  postData: string;
  result: string;

  registerUser(form: NgForm) {
    this.result = JSON.stringify(form.value);
    console.log(this.result);
  }
}

