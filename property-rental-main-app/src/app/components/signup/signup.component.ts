import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/service/auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm: FormGroup;

  constructor(private readonly fb: FormBuilder, private readonly authService: AuthService, private readonly router: Router) {
    this.signupForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contactNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]], // Assuming 10 digit contact number
      password: ['', [Validators.required,Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),]] // Minimum 8 character
    });
  }

  
  onSubmit() {
    if (this.signupForm.valid) {
      this.authService.signup(this.signupForm.value).subscribe(response => {
        alert(response);
        this.router.navigate(['/']); // Redirect to home page
      }, error => {
        console.error('Signup error', error);
        alert('Signup failed');
      });
    }
  }
}
