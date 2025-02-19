import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/service/auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  firstName: string = '';
  lastName: string = '';
  contactNumber: string = '';
  email: string = '';
  password: string = '';
  message: string = '';  // ✅ Message to display on the UI
  isError: boolean = false; // ✅ Track if it's an error message
  isSubmitting: boolean = false; // ✅ Prevent multiple clicks

  constructor(private authService: AuthService) {}

  onSignup() {
    if (this.isSubmitting) return; // ✅ Prevents multiple clicks

    this.isSubmitting = true;

    this.authService.signup(this.firstName, this.lastName, this.contactNumber, this.email, this.password).subscribe({
      next: (response) => {
        this.message = response.message; // ✅ Show success message
        this.isError = false; // ✅ Reset error flag
        this.isSubmitting = false;
      },
      error: (error) => {
        this.message = error.error.message || 'Signup failed. Try again!';
        this.isError = true; // ✅ Set error flag
        this.isSubmitting = false;
      }
    });
  }
}
