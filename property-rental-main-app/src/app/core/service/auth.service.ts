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
    return this.http.post(`${this.baseUrl}/signup`, user, { headers, responseType: 'text' });
  }

  login(credentials: any): Observable<any> {

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(`${this.baseUrl}/login`, credentials, { headers, responseType: 'text' }).pipe(
      map(response => {
        // Convert plain text response to JSON format
        if (response === 'Login successful!') {
          return { success: true, message: response };
        } else {
          return { success: false, message: response };
        }
      })
    );

  }
  isLoggedIn(): boolean {
    // Implement your logic to check if the user is logged in
    // For example, check if a token exists in local storage
    return !!localStorage.getItem('token');
  }
}
