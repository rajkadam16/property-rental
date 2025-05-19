import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly baseUrl = 'http://localhost:8080/account'; // Update this with your backend URL
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
          return { success: true };
        } else {
          return { success: false };
        }
      })
    );
  }
  
  saveLoginData(userId: string, token: string) {
    localStorage.setItem('userId', userId);
    localStorage.setItem('token', token);
    this.loginStatus.next(true);
  }
  
  
  saveUserId(userId: string) {
    localStorage.setItem('token', userId);
    this.loginStatus.next(true); // Update login status
  }

  getUserId(): string | null {
    return localStorage.getItem('userId');
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    this.loginStatus.next(false); // Update login status
  }
}
