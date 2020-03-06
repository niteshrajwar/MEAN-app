import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-new-movie',
  templateUrl: './new-movie.component.html',
  styleUrls: ['./new-movie.component.css']
})
export class NewMovieComponent implements OnInit {
  public message = null;
  constructor(
    private _appService: AppService
  ) { }

  ngOnInit(): void {
  }
  onSubmit = (form) => {
    const persondata = {
        "id": 146,
        "title": form.value.title,
        "year": form.value.year,
        "runtime": form.value.runtime,
        "genres": [form.value.genres],
        "director": form.value.director,
        "actors": form.value.actors,
        "plot": form.value.plot,
        "posterUrl": form.value.poster
    }
    this._appService.updatePersondata(persondata);
    this._appService.postdata(persondata).subscribe((response) => {
     if(response.status === 200) {
        this.message = response.message;
     } else { 
       this.message = null;
     }
   })
  }
}
