import { Component, OnInit } from '@angular/core';
import { Login } from '../models/login.model';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'admin';
  password = 'admin';

  loginDetails: Login = {
    username: null,
    password: null
  };

  constructor() { }

  ngOnInit() {
  }

  validateLogin(loginData: Login): void {

    if (loginData.username === this.username) {
      console.log('Login Successfull !!!');
    } else {
      console.log('Login Unsuccessfull !!!');
    }
  }

}
