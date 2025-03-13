import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';
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

  getUserProperties(userId: string): Observable<any> {
    const url = `${ApiConfig.propertyData}/user/${userId}`;
    console.log('Fetching user properties from:', url); // Debugging log
  
    return this.http.get(url).pipe(
      catchError(error => {
        console.error('Error fetching properties:', error);
        return throwError(error);
      })
    );
  }
  
  deleteProperty(propertyId: string): Observable<any> {
    return this.http.delete(`${ApiConfig.propertyData}/${propertyId}`);
  }
  parseJsonFile(path: string) {
    return this.http.get(path);
  }
}