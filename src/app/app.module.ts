import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalModule } from './principal/principal.module';
import { TwowayComponent } from './principal/twoway/twoway.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrincipalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
