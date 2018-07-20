import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieList } from '../details/movie-list.service';
import { LandingComponent } from '../landing/landing.component';
import { MovieService } from '../movies.service';
@Component({
  selector: 'app-movie-promo',
  templateUrl: './movie-promo.component.html',
  styleUrls: ['./movie-promo.component.css']
})
export class MoviePromoComponent implements OnInit {

  private items:Object[] = [];
  private movieCollection;
  private promoMovies:Object[] = [];

  constructor(private router: Router,
    private movieList:MovieList, private movieService: MovieService) {
      this.movieService.getData().subscribe(res => {
        this.movieCollection = movieService.generateArray(res); 
        this.getPromo();
        console.log(this.promoMovies);
      });
  }

  generateArray(res) {
    return Object.keys(res).map((key) =>{ return res[key]})
  }  

  getPromo(){
    for(let i = 0; i < this.movieCollection.length; i++){
      if(this.movieCollection[i].Type == "Promo"){
        this.promoMovies.push(this.movieCollection[i])
      }
    }
  }

  onClick(name: String){
    this.movieList.setData(name);
    this.router.navigateByUrl('/details/' + name);
  }

  ngOnInit() {
  }

}