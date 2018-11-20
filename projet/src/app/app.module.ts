import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent} from './header/header.component';

import { DescriptionComponent } from './description/description.component';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {enableProdMode} from '@angular/core';
import {CarouselModule} from 'angular2-carousel';
import {Ng2CarouselamosModule} from 'ng2-carouselamos';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ListliveComponent } from './listlive/listlive.component';
import { PaginationComponent } from './pagination/pagination.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './header/login/login.component';
import { InscriptionComponent } from './header/inscription/inscription.component';


enableProdMode();
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,

    DescriptionComponent,

    ListliveComponent,

    PaginationComponent,

    FooterComponent,

    LoginComponent,

    InscriptionComponent,
  ],
  imports: [
    NgbModule,
    CarouselModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2CarouselamosModule,

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
