import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    public movieData = new BehaviorSubject<any>(null);
    private sharedData$: Observable<any> 
   
    publishData(data: string) {
        this.movieData.next(data);
    }

    getData(): Observable<any> {
        return this.movieData.asObservable();
    }
}
