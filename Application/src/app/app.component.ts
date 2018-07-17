import { Component } from '@angular/core';
import { MovieService } from "./movies.service";
import { HttpClient } from "@angular/common/http";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  storedResponse: any;

  constructor( private movies: MovieService){

  }

  onGetMovieData(){
    this.storedResponse = this.movies.getData();
  }
}