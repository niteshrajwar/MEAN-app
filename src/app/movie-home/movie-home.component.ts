import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-home',
  templateUrl: './movie-home.component.html',
  styleUrls: ['./movie-home.component.css']
})
export class MovieHomeComponent implements OnInit {
  @Input() movieData = null;
  constructor(
    private _router: Router
  ) { }

  ngOnInit(): void {
  }
  redirectToMovieDetails = (id) => {
    debugger
   if (id) {
   }
  }
}
