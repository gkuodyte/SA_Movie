import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MovieList } from './movie-list.service';
import { MovieService } from '../movies.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent implements OnInit {

  data = this.movieList.getData();

  private movieCollection;
  private selectedMovie;

  constructor(private router: Router, private movieList: MovieList, private movieService :MovieService) { 
    this.movieService.getData().subscribe(res => {
    this.movieCollection = movieService.generateArray(res); 

      for(let i = 1; i < this.movieCollection.length; i++){
        if((this.movieCollection[i].Title) == this.data){
          this.selectedMovie = this.movieCollection[i];
        }
      }
    });
  }
  
  ngOnInit() {
  }
}