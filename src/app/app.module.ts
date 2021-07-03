import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstComponentPersonsComponent } from './first-component-persons/first-component-persons.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentPersonsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
