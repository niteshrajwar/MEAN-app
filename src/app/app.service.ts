import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  public personsData = [];
  public baseUrl = "http://localhost:3000/";
  constructor(
    private http: HttpClient
  ) { }

  getData = (dataType): Observable <any> => {
    return this.http.get(this.baseUrl + dataType);
  }
  postdata = (data): Observable <any> => {
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type':  'application/json',
    //     'Authorization': 'NKRWTEUWTYUI'
    //   })
    // }
    return this.http.post(this.baseUrl + 'persons', data);
  }
  updatePersondata = (newPersonDetails) => {
    this.personsData.push(newPersonDetails);
  }
  getUpdatedPersonData = () => {
    return this.personsData;
  }
  login = (email,password): Observable<any> => {
    const requestBody = {
      email: email,
      password: password
    }
    return this.http.post(this.baseUrl + 'login', requestBody);
  }
  signUp = (requestBody): Observable<any> => {
    return this.http.post(this.baseUrl + 'register', requestBody);
  }
}
