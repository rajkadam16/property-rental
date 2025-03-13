import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class authGuardGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    const userId = localStorage.getItem('userId'); // Check if user ID is stored

    if (userId) {
      return true; // User is logged in, allow access
    } else {
      alert("You must be logged in to accses this page!");
      this.router.navigate(['/login']); // Redirect to login page
      return false; // Block access
    }
  }
}
