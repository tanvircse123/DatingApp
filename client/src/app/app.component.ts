import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './_models/User';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Dating App';
  users:any;

  constructor(private accountService:AccountService){

  }
  ngOnInit(): void {
    this.setCurrentUser();
  }

  setCurrentUser(){
    // getting the user from the local storage
    // and setting to the observable
    // when we go to the page 
    // if we are already loggedin before and we have 
    // user object in the local storage
    // then using this function we can set the user
    // otherwise the user will set null;
    const user:User = JSON.parse(localStorage.getItem('user'));
    this.accountService.setCurrentUser(user);
  }

  
}
