import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    public movieData:Subject <any>;
  constructor( ) { }

  private mov: Subject <any> 
}
