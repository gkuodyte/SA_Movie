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
  private soonMovies:Object[] = [];
  private topMovies:Object[] = [];

  constructor(private router: Router, private movieList: MovieList, private movieService :MovieService) { 
      this.movieService.getData().subscribe(res => {
      this.movieCollection = movieService.generateArray(res); 
      this.getNew();
      this.getSoon();
      this.getTop();
    });
  }
  ngOnInit() {
  }

  getNew(){
    for(let i = 0; i < this.movieCollection.length; i++){
      if(this.movieCollection[i].Type == "New"){
        this.newMovies.push(this.movieCollection[i])
      }
    }
  }

  getSoon(){
    for(let i = 0; i < this.movieCollection.length; i++){
      if(this.movieCollection[i].Type == "Soon"){
        this.soonMovies.push(this.movieCollection[i])
      }
    }
  }

  getTop(){
    for(let i = 0; i < this.movieCollection.length; i++){
      if(this.movieCollection[i].Type == "Top"){
        this.topMovies.push(this.movieCollection[i])
      }
    }
  }

  onClick(name: String){
    this.movieList.setData(name);
    this.router.navigateByUrl('/details/' + name);
  }

}
