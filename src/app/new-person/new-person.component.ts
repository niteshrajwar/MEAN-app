import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-new-person',
  templateUrl: './new-person.component.html',
  styleUrls: ['./new-person.component.css']
})
export class NewPersonComponent implements OnInit {
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
