import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

  //init
  registerForm: FormGroup;

  constructor(public navCtrl: NavController, public formBuilder: FormBuilder ) {

    this.registerForm = formBuilder.group({
      userName: ['',Validators.compose([Validators.maxLength(30),Validators.pattern('[a-zA-Z]*'),Validators.required, Validators.minLength(4)])],
      email: ['', Validators.email],
      password: ['', Validators.minLength(6)],
      retypePassword: ['', Validators.minLength(6)]
    });

  }

}
