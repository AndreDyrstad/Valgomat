import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {

  title = 'Generelt om tilbud og innhold';
  regions = ['Helse Nord', 'Helse midt', 'Helse vest', 'Helse Sør-Øst'];

  constructor() { }

  ngOnInit() {
  }

}
