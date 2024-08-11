import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  LoginForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.maxLength(46), Validators.minLength(6)])
  });
  
  fromvalue: boolean = false;
  
  submit(): void {
    this.fromvalue = true;
    if (this.LoginForm.invalid) {
      return;
    }
    console.log(JSON.stringify(this.LoginForm.value));
    this.reset();
  }
  
  reset(): void {
    this.fromvalue = false;
    this.LoginForm.reset();
  }
  
}
