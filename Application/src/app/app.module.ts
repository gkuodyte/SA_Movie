import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';
import { LandingComponent } from './landing/landing.component';
import { MoviePromoComponent } from './movie-promo/movie-promo.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MovieService} from './movies.service';
import { HttpClientModule } from '@angular/common/http';
import {MovieList} from '../app/details/movie-list.service';
import { DatepickerOverviewExample } from './calendar/calendar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatAutocompleteModule, MatMenuModule} from '@angular/material';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';


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
    NavBarComponent,
    DatepickerOverviewExample
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatMenuModule,
    MatNativeDateModule
  ],
  providers: [
    MovieService,
    MovieList
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
