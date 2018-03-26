import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SimpleTimer } from 'ng2-simple-timer';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    SimpleTimer
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
