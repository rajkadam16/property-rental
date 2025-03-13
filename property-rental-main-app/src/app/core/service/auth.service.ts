import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly baseUrl = 'http://localhost:8080/account'; // Update this with your backend URL
  private readonly loginStatus = new BehaviorSubject<boolean>(!!localStorage.getItem('userId'));
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
        // Response is already a JSON object, no need to manually parse
        if (response.success) {
          return { success: true, message: response.message, userId: response.userId };
        } else {
          return { success: false, message: response.message };
        }
      })
    );
  }
  

  saveUserId(userId: string) {
    localStorage.setItem('userId', userId);
    this.loginStatus.next(true); // Update login status
  }

  getUserId(): string | null {
    return localStorage.getItem('userId');
  }

  logout() {
    localStorage.removeItem('userId');
    this.loginStatus.next(false); // Update login status
  }
}
