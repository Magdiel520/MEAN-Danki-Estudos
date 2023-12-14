import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiretivasEstruturaisComponent } from './diretivas-estruturais/diretivas-estruturais.component';
import { DiretivasAtributoComponent } from './diretivas-atributo/diretivas-atributo.component';

@NgModule({
  declarations: [
    AppComponent,
    DiretivasEstruturaisComponent,
    DiretivasAtributoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
