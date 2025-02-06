import { Component } from '@angular/core';
import { FormControl,FormGroup,Validators,  } from '@angular/forms';
import { CommonUtilitiesService } from 'src/app/core/service/common-utilities.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  valid:boolean =false;
  from_name:string= "raj kadam"
  signUp: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  }, 
);
  
  onSubmit() {
    this.valid = true;
    if (this.signUp.invalid) {
      return;
    }
  }
    reset() {
      this.signUp.reset();
      this.valid = false; 
    }



      username = '';
      password = '';
      email = ''; // Add email for signup
      confirmPassword = ''; // Add confirm password for signup
    
      constructor(private authService: CommonUtilitiesService) {}
 
    
      // Signup method
      signup() {
        // Make sure to check if the password and confirmPassword match
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
            this.username = '';
            this.password = '';
            this.email = '';
            this.confirmPassword = '';
          },
          error => {
            alert('Signup failed!');
          }
        );
      }
    
}
