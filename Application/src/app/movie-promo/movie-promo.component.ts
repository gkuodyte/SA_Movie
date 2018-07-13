import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-promo',
  templateUrl: './movie-promo.component.html',
  styleUrls: ['./movie-promo.component.css']
})
export class MoviePromoComponent implements OnInit {

  constructor(private router: Router) { }

  onClick(){
    this.router.navigateByUrl('/details');
  }

  ngOnInit() {
  }

}
