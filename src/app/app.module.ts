import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpService} from './http-service';
import {HttpClientModule} from '@angular/common/http';
import { CenterComponent } from './center/center.component';

@NgModule({
  declarations: [
    AppComponent,
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
