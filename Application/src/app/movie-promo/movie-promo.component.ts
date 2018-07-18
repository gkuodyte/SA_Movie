import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieList } from '../details/movie-list.service';


@Component({
  selector: 'app-movie-promo',
  templateUrl: './movie-promo.component.html',
  styleUrls: ['./movie-promo.component.css']
})
export class MoviePromoComponent implements OnInit {

  items: Array<any> = [];

  constructor(private router: Router,
    private movieList:MovieList) {
    this.items = [
      {name: 'assets/images/Thor.jpeg'},
      {name: 'assets/images/harrypotter.jpg'},
      {name: 'assets/images/Avengers.png'},
      {name: 'assets/images/Thor.jpeg'},
      {name: 'assets/images/Hellboy.png'},

    ];
   }

  onClick(name: String){
    this.movieList.setData(name);
    this.router.navigateByUrl('/details/' + name);
  }

  ngOnInit() {
  }

}