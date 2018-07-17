import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';
import { LandingComponent } from './landing/landing.component';
import { MoviePromoComponent } from './movie-promo/movie-promo.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
<<<<<<< HEAD
=======
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { MovieService} from './movies.service';
import { HttpClientModule } from '@angular/common/http';

>>>>>>> 429db2df5d8befce5a746fa7044180e7915ddc4a

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
<<<<<<< HEAD
    RouterModule.forRoot(appRoutes)
=======
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    Ng2CarouselamosModule
>>>>>>> 429db2df5d8befce5a746fa7044180e7915ddc4a
  ],
  providers: [
    MovieService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
