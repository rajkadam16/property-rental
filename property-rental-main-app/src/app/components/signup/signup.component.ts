import { Component } from '@angular/core';
import { FormControl,FormGroup,Validators,  } from '@angular/forms';

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

    // auth process
    // user = { username: '', email: '', password: '' };

    // constructor(private authService: CommonUtilitiesService) {}
  
    // register() {
    //   this.authService.signup(this.user).subscribe(response => {
    //     alert(response);
    //   });
    // }
}
