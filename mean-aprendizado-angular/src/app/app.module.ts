import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiretivasAngularComponent } from './diretivas-angular/diretivas-angular.component';
import { AtributoComponent } from './diretivas-angular/atributo/atributo.component';
import { EstruturaisComponent } from './diretivas-angular/estruturais/estruturais.component';

@NgModule({
  declarations: [
    AppComponent,
    DiretivasAngularComponent,
    AtributoComponent,
    EstruturaisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
