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

  constructor(private http:HttpClient,private accountService:AccountService){

  }
  ngOnInit(): void {
    this.getUsers();
    this.setCurrentUser();
  }

  setCurrentUser(){
    // getting the user from the local storage
    // and setting to the observable
    const user:User = JSON.parse(localStorage.getItem('user'));
    this.accountService.setCurrentUser(user);
  }



  getUsers(){
    this.http.get("https://localhost:7266/api/Users").subscribe(response=>{
      this.users = response;
    },err=>{
      console.log(err);
    })
  }
  
}
