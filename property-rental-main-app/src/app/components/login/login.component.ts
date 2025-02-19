import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string = '';
  password: string = '';
  message: string = '';

  constructor(private readonly authService: AuthService) {}

  onLogin() {
    this.authService.login(this.email, this.password).subscribe({
      next: (response) => {
        this.message = response; // Show response from backend
      },
      error: (error) => {
        this.message = 'Login failed! Check your credentials.';
      }
    });
  }
}
