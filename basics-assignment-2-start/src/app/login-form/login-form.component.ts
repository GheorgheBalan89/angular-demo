import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-login-form]',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  userName ="";
  isUserNameEmpty = true;
  constructor() { }

  ngOnInit(): void {
  }
  updateUserName(event:any){
    this.userName = (<HTMLInputElement>event.target).value;
    this.isUserNameEmpty = false;
  }

  clearUserName(){
    this.userName = "";
    this.isUserNameEmpty = true;
  }
}
