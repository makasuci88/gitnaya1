import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {RegisterPage} from '../register/register';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class LoginPage {

    //init
    loginForm: FormGroup;

    constructor(public navCtrl: NavController, public formBuilder: FormBuilder) {

        this.loginForm = formBuilder.group({
            // userName: ['',Validators.compose([Validators.maxLength(30),Validators.pattern('[a-zA-Z]*'),Validators.required])],
            userName: ['', Validators.required],
            password: ['',Validators.required]
        });

    }

    login(){
        if(this.loginForm.valid){

        }
    }

    register(){
        this.navCtrl.push(RegisterPage);
    }

}
