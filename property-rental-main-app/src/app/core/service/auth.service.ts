import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly baseUrl = 'http://localhost:8080/account'; // Update if backend URL is different

  constructor(private readonly http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    const loginData = { email, password };
    return this.http.post(`${this.baseUrl}/login`, loginData);
  }
  signup(firstName: string, lastName: string, contactNumber: string, email: string, password: string): Observable<any> {
    const signupData = { firstName, lastName, contactNumber, email, password };
    return this.http.post(`${this.baseUrl}/signup`, signupData);
  }
  
}
