import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model:any = {};
  ngOnInit(): void {
  }

constructor(private accountService:AccountService,private toastr:ToastrService){}

  register(){
    this.accountService.register(this.model).subscribe(response=>{
      console.log(response);
      this.cancel();
      this.toastr.success("Registered Successfully");
    },error=>{
      console.log(error);
      this.toastr.error(error.error);
    })
  }
  cancel(){
    this.cancelRegister.emit(false);
  }

}
