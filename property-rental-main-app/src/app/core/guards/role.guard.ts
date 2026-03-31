import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('You must be logged in to access this page!');
      this.router.navigate(['/login']);
      return false;
    }

    const expectedRoles: string[] = route.data['roles'];
    if (!expectedRoles || expectedRoles.length === 0) {
      return true; // No role restriction
    }

    const hasRequiredRole = expectedRoles.some(role => this.authService.hasRole(role));
    if (!hasRequiredRole) {
      alert('You do not have permission to access this page.');
      this.router.navigate(['/']);
      return false;
    }

    return true;
  }
}
