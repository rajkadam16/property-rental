import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly baseUrl = 'http://localhost:8080/account'; // Update this with your backend URL

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
  
  isLoggedIn(): boolean {
    // Implement your logic to check if the user is logged in
    // For example, check if a token exists in local storage
    return !!localStorage.getItem('token');
  }
  saveUserId(userId: string) {
    localStorage.setItem('userId', userId);
  }

  getUserId(): string | null {
    return localStorage.getItem('userId');
  }

  logout() {
    localStorage.removeItem('userId');
  }
}
