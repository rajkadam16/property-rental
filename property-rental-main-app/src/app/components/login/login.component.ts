import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonUtilitiesService } from 'src/app/core/service/common-utilities.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // LoginForm: FormGroup = new FormGroup({
  //   username: new FormControl('', [Validators.required, Validators.email]),
  //   password: new FormControl('', [Validators.required, Validators.maxLength(46), Validators.minLength(6)])
  // });
  
  // fromvalue: boolean = false;
  
  // // submit(): void {
  // //   this.fromvalue = true;
  // //   if (this.LoginForm.invalid) {
  // //     return;
  // //   }
  // //   this.reset();
  // // }
  
  // reset(): void {
  //   this.fromvalue = false;
  //   this.LoginForm.reset();
  // }


  // // auth process
  // username = '';
  // password = '';

  // constructor(private authService: CommonUtilitiesService) {}

  // login() {
  //   this.authService.login(this.username, this.password).subscribe(token => {
  //     localStorage.setItem('token', token);
  //     alert('Login successful!');
  //   });
  // }

  username = '';
  password = '';
  email = '';  // Used only for signup
  confirmPassword = '';  // Used only for signup
  isSignup = false;  // Controls form toggling

  constructor(private authService: CommonUtilitiesService) {}

  // Login method
  login() {
    this.authService.login(this.username, this.password).subscribe(
      token => {
        localStorage.setItem('token', token);
        alert('Login successful!');
      },
      error => {
        alert('Login failed! Please check your credentials.');
      }
    );
  }

  // Signup method
  signup() {
    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    const signupData = {
      username: this.username,
      password: this.password,
      email: this.email,
    };

    this.authService.signup(signupData).subscribe(
      response => {
        alert('Signup successful! Please login.');
        // Reset form fields
        this.username = '';
        this.password = '';
        this.email = '';
        this.confirmPassword = '';
        this.isSignup = false;  // Switch to login form
      },
      error => {
        alert('Signup failed! Please try again.');
      }
    );
  }

  // Toggle between login and signup forms
  toggleForm(form: string) {
    this.isSignup = form === 'signup';
    
  }
  
}
