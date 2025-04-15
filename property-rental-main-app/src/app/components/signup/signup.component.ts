import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/core/service/alert.service';
import { AuthService } from 'src/app/core/service/auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm: FormGroup;

  constructor(private readonly fb: FormBuilder, private readonly authService: AuthService, private readonly router: Router,private readonly alertService: AlertService) {
    this.signupForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contactNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }
  onSubmit() {
    if (this.signupForm.valid) {
      this.authService.signup(this.signupForm.value).subscribe(response => {
        this.alertService.showAlert('Signup successful! 🎉', 'success'); // Green
        setTimeout(() => this.router.navigate(['/login']), 2000);
      }, error => {
        this.alertService.showAlert('Signup failed! Try again.', 'error'); // Red
      });
    }
  }
  
  
}
