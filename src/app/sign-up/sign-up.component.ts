import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(
    private _appService: AppService,
    private _router: Router
  ) { }

  ngOnInit(): void {
  }
 onSubmit = (form) => {
   debugger
  const requestBody = {
    name: form.value.name,
    age:form.value.age,
    email:form.value.email,
    password: form.value.password,
    accountType: form.value.accounttype
  };
   this._appService.signUp(requestBody).subscribe((response) => {
     if(response.status) {
       alert(response.message);
       this._router.navigateByUrl('/login');
     } else {
        alert(response.message);
     }
   })
 }
}
