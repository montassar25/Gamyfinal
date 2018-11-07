import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent} from './header/header.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { DescriptionComponent } from './description/description.component';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {enableProdMode} from '@angular/core';
enableProdMode();
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InscriptionComponent,
    DescriptionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
