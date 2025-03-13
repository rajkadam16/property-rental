import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { ApiConfig } from '../constant/ApiConfig';

@Injectable({
  providedIn: 'root',
})
export class CommonUtilitiesService {

  constructor(private readonly http: HttpClient) { }

  // backend
  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(`${ApiConfig.propertyData}/get/all`);
  }

  // through json
  // getProducts(): Observable<any[]> {
  //   return this.http.get<any[]>(`${ApiConfig.propertyData}`);
  // }
  
  getProductById(id: number): Observable<any> {
    return this.getProducts().pipe(
      map((products: any[]) => products.find((product) => product.id === id))
    );
  }


  addProperty(property: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(`${ApiConfig.propertyData}/create`, property, { headers });
  }

  getUserProperties(userId: string): Observable<any[]> {
    return this.http.get<any[]>(`${ApiConfig.propertyData}/user/${userId}`);
  }

  parseJsonFile(path: string) {
    return this.http.get(path);
  }
}