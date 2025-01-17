import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { ApiConfig } from '../constant/ApiConfig';

@Injectable({
  providedIn: 'root',
})
export class CommonUtilitiesService {

  constructor(private readonly http: HttpClient) {}

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(ApiConfig.propertyData);
  }

  getProductById(id: number): Observable<any | undefined> {
    return this.getProducts().pipe(
      map((products: any[]) => products.find((product) => product.id === id))
    );
  }

  parseJsonFile(path: string) {
    return this.http.get(path);
  }
}
