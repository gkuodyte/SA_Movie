import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieList } from '../details/movie-list.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  data = this.movieList.getData();

  constructor(private router: Router, private movieList: MovieList) { 

  }

  ngOnInit() {
  }

  onClick(name: String){
    this.router.navigateByUrl('/details/' + name);
  }

}
