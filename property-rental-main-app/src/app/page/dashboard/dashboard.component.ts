import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/core/service/alert.service';
import { AuthService } from 'src/app/core/service/auth.service';
import { CommonUtilitiesService } from 'src/app/core/service/common-utilities.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  isLoggedIn = false;
  userName = '';
  userRole = '';
  totalProperties = 0;
  pendingBookings = 0;
  totalEarnings = 0;
  averageRating = 0;
  properties: any[] = [];

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
    private readonly alertService: AlertService,
    private readonly propertyService: CommonUtilitiesService
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = !!localStorage.getItem('token');
    this.loadDashboardStats();
    this.setUserInfo();
  }

  setUserInfo(): void {
    const roles = this.authService.getRoles();
    if (roles.includes('ROLE_ADMIN')) {
      this.userRole = 'Admin';
    } else if (roles.includes('ROLE_OWNER')) {
      this.userRole = 'Property Owner';
    } else {
      this.userRole = 'Tenant';
    }
  }

  loadDashboardStats(): void {
    const userId = this.authService.getUserId();
    if (!userId) return;

    this.propertyService.getUserProperties(userId).subscribe({
      next: (properties: any[]) => {
        this.properties = properties;
        this.totalProperties = properties.length;

        // Calculate dynamic stats from properties data
        this.pendingBookings = properties.filter(
          (p: any) => p.status === 'pending'
        ).length;

        // Sum up first available unit price across properties
        this.totalEarnings = properties.reduce((sum: number, p: any) => {
          const rows = p.availableUnits?.rows || [];
          const firstPrice = rows.length > 0 ? (parseInt(rows[0].price, 10) || 0) : 0;
          return sum + firstPrice;
        }, 0);

        // Calculate average rating if available
        const rated = properties.filter((p: any) => p.averageRating);
        this.averageRating = rated.length > 0
          ? rated.reduce((s: number, p: any) => s + p.averageRating, 0) / rated.length
          : 0;
      },
      error: (err) => {
        console.error('Error loading dashboard stats:', err);
      }
    });
  }

  logout(): void {
    this.authService.logout();
    this.isLoggedIn = false;
    this.alertService.showAlert('Logout successful! 🎉', 'success');
    this.router.navigate(['/login']);
  }
}
