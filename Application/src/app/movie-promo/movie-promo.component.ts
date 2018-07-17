import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-movie-promo',
  templateUrl: './movie-promo.component.html',
  styleUrls: ['./movie-promo.component.css']
})
export class MoviePromoComponent implements OnInit {

  items: Array<any> = [];

  constructor(private router: Router) {
    this.items = [
      {name: 'assets/images/Thor.jpeg'},
      {name: 'assets/images/harrypotter.jpg'},
      {name: 'assets/images/Avengers.png'},
      {name: 'assets/images/Thor.jpeg'},
      {name: 'assets/images/Hellboy.png'},

    ];
   }

  onClick(name: String){
    console.log(name);
    this.router.navigateByUrl('/details/' + name);
  }

  ngOnInit() {
  }

}