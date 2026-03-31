import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly baseUrl = 'http://localhost:8080/account';
  private readonly loginStatus = new BehaviorSubject<boolean>(!!localStorage.getItem('token'));
  loginStatus$ = this.loginStatus.asObservable();
  
  constructor(private readonly http: HttpClient) { }

  signup(user: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(`${this.baseUrl}/signup`, user, { headers });
  }

  login(credentials: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  
    return this.http.post(`${this.baseUrl}/login`, credentials, { headers }).pipe(
      map((response: any) => {
        if (response.token && response.userId) {
          localStorage.setItem('token', response.token);
          localStorage.setItem('userId', response.userId);
          // Store roles from login response
          if (response.roles) {
            localStorage.setItem('roles', JSON.stringify(response.roles));
          }
          this.loginStatus.next(true);
          return { success: true };
        } else {
          return { success: false, message: 'Invalid response from server' };
        }
      }),
      catchError((error) => {
        const message = error?.error || error?.message || 'Login failed. Please try again.';
        return of({ success: false, message });
      })
    );
  }
  
  saveLoginData(userId: string, token: string) {
    localStorage.setItem('userId', userId);
    localStorage.setItem('token', token);
    this.loginStatus.next(true);
  }

  getUserId(): string | null {
    return localStorage.getItem('userId');
  }

  // --- Role-based methods ---

  getRoles(): string[] {
    const roles = localStorage.getItem('roles');
    return roles ? JSON.parse(roles) : [];
  }

  hasRole(role: string): boolean {
    return this.getRoles().includes(role);
  }

  isAdmin(): boolean {
    return this.hasRole('ROLE_ADMIN');
  }

  isOwner(): boolean {
    return this.hasRole('ROLE_OWNER');
  }

  isUser(): boolean {
    return this.hasRole('ROLE_USER');
  }

  canCreateProperty(): boolean {
    return this.isOwner() || this.isAdmin();
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('roles');
    this.loginStatus.next(false);
  }
}
