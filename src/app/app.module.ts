import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {OffersComponent} from './offers/offers.component';
import { OfferMsComponent } from './offer-ms/offer-ms.component';


@NgModule({
  declarations: [
    AppComponent,
    OffersComponent,
    OfferMsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
