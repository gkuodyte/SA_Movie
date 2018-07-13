import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';
import { LandingComponent } from './landing/landing.component';
import { MoviePromoComponent } from './movie-promo/movie-promo.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    LandingComponent,
    MoviePromoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
