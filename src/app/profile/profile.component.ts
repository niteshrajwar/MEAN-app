import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public isLoggedIn = false;
  public userDetails = null;
  constructor(
    private _userService: UserService
  ) { }

  ngOnInit(): void {
    const { isLoggedIn, userDetails } = this._userService.IsLoggedIn();
    this.isLoggedIn = isLoggedIn;
    this.userDetails = userDetails;
  }

}
