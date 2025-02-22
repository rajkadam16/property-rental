import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private readonly fb: FormBuilder, private readonly authService: AuthService, private readonly router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

onSubmit() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe(response => {
        console.log('Server response:', response);
        if (response.success) {
          console.log('Login successful', response);
          alert('Login successful');
          this.router.navigate(['/']); // Redirect to home page
        } else {
          console.error('Login error', response);
          alert('Login failed: ' + response.message);
        }
      }, error => {
        console.error('Login error', error);
        alert('Login failed');
      });
    }
  }
}
