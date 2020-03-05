import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  public movieData = null;
  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _appService: AppService
  ) { }

  ngOnInit(): void {
    const movieId = this._activatedRoute.snapshot.params.movieid;
    this.getMovieDetails(movieId);
  }
 getMovieDetails = (id) => {
  this._appService.getData('movie/:id').subscribe((response) => {
    if (response.status) {
      this.movieData = response.data;
    }
  });
 } 
}
