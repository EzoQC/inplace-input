import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {InplaceInputModule} from './inplace-input/inplace-input.module';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    InplaceInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
