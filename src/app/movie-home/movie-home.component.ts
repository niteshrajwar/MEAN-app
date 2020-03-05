import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-movie-home',
  templateUrl: './movie-home.component.html',
  styleUrls: ['./movie-home.component.css']
})
export class MovieHomeComponent implements OnInit {
  @Input() movieData = null;
  constructor(
    private _router: Router,
    private _userService: UserService
  ) { }

  ngOnInit(): void {
  }
  redirectToMovieDetails = (movieData) => {
   this._userService.publishData(movieData);
   this._router.navigateByUrl('movie/' + (movieData.id).toString());
  }
}
