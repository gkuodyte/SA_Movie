import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MovieList } from './movie-list.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent implements OnInit {

  data = this.movieList.getData();

  constructor(private router: Router, private movieList: MovieList) {

   }

  ngOnInit() {
  }

 
    


}
