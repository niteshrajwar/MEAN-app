import { Component, OnInit } from '@angular/core';
import { typeofExpr } from '@angular/compiler/src/output/output_ast';
import { Subscription } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public isLoggedIn = false;
  public userDetails = null;
  public subscriber: Subscription
  constructor(
    private _userService: UserService
  ) { }

  ngOnInit(): void {
    const { isLoggedIn, userDetails } = this._userService.IsLoggedIn();
    this.isLoggedIn = isLoggedIn;
    this.userDetails = userDetails;
    this.subscriber = this._userService.getUserData().subscribe((data) => {
      if (data) {
        this.userDetails = data;
        this.isLoggedIn = true;
      } else if (!data && !this.userDetails) {
        this.isLoggedIn = false;
      }
    })
  }
  logout = () => {
    sessionStorage.clear();
    this.userDetails = null;
    this.isLoggedIn = false;
    this._userService.publishUserData(null);
    window.location.assign('/');
  }
}
