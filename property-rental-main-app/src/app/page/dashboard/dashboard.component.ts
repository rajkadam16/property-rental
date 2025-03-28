import { Component } from '@angular/core';
import {  Router } from '@angular/router';
import { AlertService } from 'src/app/core/service/alert.service';
import { AuthService } from 'src/app/core/service/auth.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  isLoggedIn = false;
constructor(private readonly authService: AuthService,private readonly router:Router,private readonly alertService: AlertService) { }
  logout() {
    this.authService.logout();
    this.isLoggedIn = false;
    this.alertService.showAlert('Logout successful! 🎉');
    this.router.navigate(['/login']);
  }
}
