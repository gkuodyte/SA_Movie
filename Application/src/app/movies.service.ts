import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()
  export class MovieService{
    
    constructor(private http: HttpClient) { 
      this.getData();
    }

    private movieArray;

    getData(){
      this.http.get('https://groupproject-92fdb.firebaseio.com/Movies.json').subscribe(res => {
        this.movieArray = this.generateArray(res)
        console.log(this.movieArray);})
    }

    generateArray(res) {
      return Object.keys(res).map((key) =>{ return res[key]})
    }  
  }
