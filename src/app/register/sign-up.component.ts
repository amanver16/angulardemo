import { Component, OnInit } from '@angular/core';
import { Register } from '../models/sign-up.model';

@Component({
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUpDetails: Register = {
    username: null,
    password: null,
    confirmPassword: null
  };

  constructor() { }

  ngOnInit() {
  }

  registerUser(signUpData: Register): void {
    console.log(signUpData);
  }

}
