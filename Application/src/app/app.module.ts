import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';
import { LandingComponent } from './landing/landing.component';
import { MoviePromoComponent } from './movie-promo/movie-promo.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MovieService} from './movies.service';
import { HttpClientModule } from '@angular/common/http';
import {MovieList} from '../app/details/movie-list.service'

const appRoutes: Routes =
[
  {path: '', component: LandingComponent},
  {path: 'test', component: MoviePromoComponent},
  {path: 'details/:name', component: DetailsComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    LandingComponent,
    MoviePromoComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    MovieService,
    MovieList
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
