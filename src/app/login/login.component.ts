import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 public isLoggedIn = false
  constructor(
    private _appService: AppService,
    private _router: Router,
    private _userService: UserService
  ) { }

  ngOnInit(): void {
    if (JSON.parse(sessionStorage.getItem("loggedIn"))) {
       this._router.navigateByUrl('');
    }
  }
  onSubmit = (form) => {
    const email = form.value.email;
    const password = form.value.password;
    this._appService.login(email,password).subscribe((res)=> {
      if(res.status) {
        this.isLoggedIn = true;
        this._userService.publishUserData(res.userData);
        sessionStorage.setItem('loggedIn' , 'true');
        sessionStorage.setItem('UserDetails' , JSON.stringify(res.userData));
        this._router.navigateByUrl('')
      }
    })
  }
}
