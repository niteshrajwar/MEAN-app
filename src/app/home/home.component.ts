import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public movies: any;
  public message = null;
  public url = "http://localhost:8080/persons";
  public value = '';
  public genres = [];
  constructor(
   private _appService: AppService
  ) { }

  ngOnInit(): void {
    this.getInfo(this.url);
  }

  getInfo = (url) => {
    this._appService.getData('movies').subscribe((data) => {
      this.movies = data;
     this.movies.forEach((movie) => {
       movie.genres.forEach((gn) => {
         if(!this.genres.includes(gn)) {
          this.genres.push(gn);
         }
       })
      })
    })
  }
  movieFilter = (filter) => {
    if (filter !== '') {
      this._appService.getData('movies/' + filter).subscribe((data) => {
      if (data.status) {
        this.movies = data.movies;
      } else {
        this.movies = [];
        alert(data.message)
      }
     
    })
  } else {
    this.getInfo(this.url);
  }
}
  
}
