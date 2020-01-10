import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title = 'CouponSite';
  email: String;
  password: String;
  usertype: String;
  name = 'Kobi';
  userChoose:String;
  registerForm: FormGroup;
  submitted = false;
  public currentDate:Date;

  constructor(private router: Router, private formBuilder: FormBuilder){}
  
  ngOnInit() {
    this.currentDate = new Date();
    this.registerForm = this.formBuilder.group({
      // firstName: ['', Validators.required],
      // lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    }); 
  }
/*
 email: 1@1.com
 password: 12345678
*/



  onSubmit() {
    this.submitted = true;
 
    // stop the process here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    else{
      this.navigateTo();
    }
 
  }
  navigateTo(){
    this.router.navigateByUrl('/' + this.userChoose);
  }
  
  notify(){
    alert(this.name);
  }

}
