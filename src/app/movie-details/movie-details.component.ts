import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';
import { Subscribable, Subscription } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  public movieData = null;
  public subscriber:Subscription
  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _appService: AppService,
    private _userService: UserService
  ) { }

  ngOnInit(): void {
    const movieId = this._activatedRoute.snapshot.params.movieid;
   // this.getMovieDetails(movieId);
    this.subscriber = this._userService.getData().subscribe((data) => {
      if (data)
         this.movieData = data;
    });
    if (!this.movieData) {
      this.getMovieDetails(movieId);
    }
  }
 getMovieDetails = (id) => {
   if (id !== '') {
  this._appService.getData('movie/' + id).subscribe((response) => {
    if (response.status) {
      this.movieData = response.movie;
    }
  });
 } 
}
}
