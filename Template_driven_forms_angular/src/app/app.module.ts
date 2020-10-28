import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { RfbComponent } from './rfb/rfb.component';
import { TdfvComponent } from './tdfv/tdfv.component';

@NgModule({
  declarations: [
    AppComponent,
    RfbComponent,
    TdfvComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
