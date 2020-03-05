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
      'name': form.value.name,
      'age': form.value.age
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
