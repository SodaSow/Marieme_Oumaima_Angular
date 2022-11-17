import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CarreComponent } from './carre/carre.component';
import { OrangeComponent } from './carre/orange/orange.component';
import { RougeComponent } from './carre/rouge/rouge.component';
import { BleuComponent } from './carre/bleu/bleu.component';
import { VertComponent } from './carre/vert/vert.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CarreComponent,
    OrangeComponent,
    RougeComponent,
    BleuComponent,
    VertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
