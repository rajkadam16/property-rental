import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from 'src/app/core/service/alert.service';
import { AuthService } from 'src/app/core/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private readonly fb: FormBuilder, private readonly authService: AuthService,private readonly alertService: AlertService) {
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
          localStorage.setItem('userId', response.userId);
  
          this.alertService.showAlert('Login successful 🎉');
  
          // Delay redirection to allow alert to be shown
          setTimeout(() => {
            window.location.assign('/dashboard');
          }, 2000);
        } else {
          console.error('Login error', response);
          this.alertService.showAlert('Login error');
        }
      }, error => {
        console.error('Login error', error);
        this.alertService.showAlert('Login failed');
      });
    }
  }
  
  
  
}
