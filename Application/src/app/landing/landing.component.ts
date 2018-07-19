import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieList } from '../details/movie-list.service';
import { MovieService } from '../movies.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  private movieCollection;

  private newMovies:Object[] = [];

  constructor(private router: Router, private movieList: MovieList, private movieService :MovieService) { 
      this.movieService.getData().subscribe(res => {
      this.movieCollection = movieService.generateArray(res); 
      this.getPromo();
      console.log(this.newMovies)

    });
  }
  ngOnInit() {
  }

  getPromo(){
    for(let i = 1; i < this.movieCollection.length; i++){
      if(this.movieCollection[i].Type == "New"){
        this.newMovies.push(this.movieCollection[i])
      }
    }
  }

  onClick(name: String){
    this.router.navigateByUrl('/details/' + name);
  }

}
