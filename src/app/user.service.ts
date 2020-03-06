import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    public movieData = new BehaviorSubject<any>(null);
    public userData = new BehaviorSubject<any>(null);
    private sharedData$: Observable<any>

    publishData(data: string) {
        this.movieData.next(data);
    }

    getData(): Observable<any> {
        return this.movieData.asObservable();
    }
    publishUserData(data: any) {
        this.userData.next(data);
    }
    getUserData(): Observable<any> {
        return this.userData.asObservable();
    }

    IsLoggedIn() {
        let isLoggedIn = false;
        let userDetails = null; 
        if (typeof window !== 'undefined' &&
            sessionStorage && sessionStorage.getItem('loggedIn') &&
            sessionStorage.getItem('UserDetails')) {
             isLoggedIn = JSON.parse(sessionStorage.getItem('loggedIn'));
             userDetails = JSON.parse(sessionStorage.getItem('UserDetails'));  
        }
        return { isLoggedIn:isLoggedIn, userDetails: userDetails };
    }
}
