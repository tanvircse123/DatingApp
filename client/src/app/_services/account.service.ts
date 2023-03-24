import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { User } from '../_models/User';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl = "https://localhost:7266/api/";
  loginUrl = "Account/login";




  // explanation
  // what is observable
  // what is ReplaySubject
  // what is going on here

  /* we use a observable to store the user
    ReplaySubject is a kind of observable
    it is like a buffer object.it store that value
    and when someone subscribe this observable
    to get the data this observable will give the last value
    in this case the last 1 value
  */
  private currentUserSource = new ReplaySubject<User>(1);
  currentUser$ = this.currentUserSource.asObservable();
  
  
  
  
  
  
  // constructor injection
  constructor(private http :HttpClient) {}

  login(model:any){
    return this.http.post(this.baseUrl+this.loginUrl,model)
    .pipe(
      map((response:User)=>{
        const user = response;
        if(user){

          // we are setting the user to local storage
          // and also to get the user from other component
          // we set the user to the observable
          localStorage.setItem('user',JSON.stringify(user));
          this.currentUserSource.next(user);
        }
      })
    )
  }

  setCurrentUser(user:User){
    this.currentUserSource.next(user);
  }

  logout(){
    localStorage.removeItem('user');
    this.currentUserSource.next(null);
  }
}
