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

  // onSubmit() {
  //   if (this.loginForm.valid) {
  //     this.authService.login(this.loginForm.value).subscribe(response => {
  //       if (response.success) {
  //         localStorage.setItem('userId', response.userId);
  //         localStorage.setItem('token', response.token); // Also store token
  //         // this.authService.loginStatus.next(true);
  //         this.alertService.showAlert('Login successful 🎉', 'success');
  //         setTimeout(() => window.location.assign('/dashboard'), 2000);
  //       }
  //       else {
  //         this.alertService.showAlert('Login failed!', 'error'); // Red
  //       }
  //     });
  //   }
  // }
  onSubmit() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe(response => {
        if (response.success) {
          this.alertService.showAlert('Login successful 🎉', 'success');
          setTimeout(() => window.location.assign('/dashboard'), 2000);
        } else {
          this.alertService.showAlert('Login failed!', 'error');
        }
      });
    }
  }
  
  
}