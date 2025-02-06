import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { ApiConfig } from '../constant/ApiConfig';

@Injectable({
  providedIn: 'root',
})
export class CommonUtilitiesService {
  private apiUrl = 'http://localhost:8080/auth';

  constructor(private readonly http: HttpClient) { }

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(ApiConfig.propertyData);
  }

  getProductById(id: number): Observable<any> {
    return this.getProducts().pipe(
      map((products: any[]) => products.find((product) => product.id === id))
    );
  }

  addProperty(propertyData: any): Observable<any> {
    return this.http.post(ApiConfig.addProperty, propertyData);
  }


  signup(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/signup`, user);
  }

  login(username: string, password: string): Observable<string> {
    return this.http.post(`${this.apiUrl}/login`, { username, password }, { responseType: 'text' });
  }
  parseJsonFile(path: string) {
    return this.http.get(path);
  }
}
