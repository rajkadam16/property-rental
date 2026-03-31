import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/service/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  heading: string = 'Cityscape rentals';
  isLoggedIn: boolean = false;
  canCreateProperty: boolean = false;
  mobileMenuOpen: boolean = false;

  constructor(private readonly authService: AuthService) {}

  ngOnInit(): void {
    this.authService.loginStatus$.subscribe(status => {
      this.isLoggedIn = status;
      this.canCreateProperty = this.authService.canCreateProperty();
    });
  }

  logout() {
    this.authService.logout();
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu() {
    this.mobileMenuOpen = false;
  }
}
