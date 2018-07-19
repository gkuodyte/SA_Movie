import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable()
  export class MovieService{
    
    constructor(private http: HttpClient) { 
      this.getData();
    }

    public movieArray;

    getData(){
      return this.http.get('https://groupproject-92fdb.firebaseio.com/Movies.json')
    }

    

    generateArray(res) {
      return Object.keys(res).map((key) =>{ return res[key]})
    }  
  }
