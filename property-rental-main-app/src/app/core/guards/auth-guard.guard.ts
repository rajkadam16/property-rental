import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class authGuardGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    const token = localStorage.getItem('token'); // ✅ Check for JWT token

    if (token) {
      return true; // Token exists, allow access
    } else {
      alert("You must be logged in to access this page!");
      this.router.navigate(['/login']); // Redirect to login
      return false; // Block access
    }
  }
}
