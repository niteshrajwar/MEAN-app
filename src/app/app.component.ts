import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 public displayadd = false;
 addnewpeople = (event) => {
    this.displayadd = !this.displayadd;
  }
}
