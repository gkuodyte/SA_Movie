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

  private selectedMovie;

  constructor(private router: Router, private movieList: MovieList, private movieService :MovieService) {

    for(let i = 1; i < movieService.movieArray.length; i++){
      if((movieService.movieArray[i].Title) == this.data){
        console.log("Found");
        console.log(movieService.movieArray[i]);
        this.selectedMovie = movieService.movieArray[i];
      }
    }
  }

  ngOnInit() {
  }
}