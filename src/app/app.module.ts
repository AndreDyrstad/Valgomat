import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {OffersComponent} from './offers/offers.component';
import { OfferMsComponent } from './offer-ms/offer-ms.component';
import { IssueComponent } from './issue/issue.component';
import { YesNoComponent } from './yes-no/yes-no.component';
import { Issues2Component } from './issues2/issues2.component';
import {FormsModule} from '@angular/forms';
import {HttpService} from './http-service';
import {HttpClientModule} from '@angular/common/http';
import { CenterComponent } from './center/center.component';

@NgModule({
  declarations: [
    AppComponent,
    OffersComponent,
    OfferMsComponent,
    IssueComponent,
    YesNoComponent,
    Issues2Component,
    CenterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
