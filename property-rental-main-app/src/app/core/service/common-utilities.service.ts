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

  
  getProductById(id: number): Observable<any> {
    return this.getProducts().pipe(
      map((products: any[]) => products.find((product) => product.id === id))
    );
  }


  addProperty(property: any): Observable<any> {
    return this.http.post(`${ApiConfig.propertyData}/create`, property, {
      withCredentials: true // Ensure credentials like cookies are sent
    });
}
  
  getUserProperties(userId: string): Observable<any> {
    const url = `${ApiConfig.propertyData}/user/${userId}`;
    const token = localStorage.getItem('token');
  
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
  
    return this.http.get(url, { headers }).pipe(
      catchError(error => {
        console.error('Error fetching properties:', error);
        return throwError(() => error);
      })
    );
  }
  
  
  

  deleteProperty(id: string): Observable<any> {
    return this.http.delete(`http://localhost:8080/property/delete/${id}`,{
      responseType: 'text' as 'json'
    });
    
  }
  
  
  parseJsonFile(path: string) {
    return this.http.get(path);
  }
}