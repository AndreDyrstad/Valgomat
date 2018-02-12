import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {OffersComponent} from './offers/offers.component';
import { OfferMsComponent } from './offer-ms/offer-ms.component';
import { IssueComponent } from './issue/issue.component';
import { YesNoComponent } from './yes-no/yes-no.component';
import { Issues2Component } from './issues2/issues2.component';


@NgModule({
  declarations: [
    AppComponent,
    OffersComponent,
    OfferMsComponent,
    IssueComponent,
    YesNoComponent,
    Issues2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
