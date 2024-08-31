import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
// import { Product } from '../models/interface';

@Injectable({
  providedIn: 'root'
})
export class CommonUtilitiesService {


  private jsonUrl = '/assets/master/propertydata.json';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.jsonUrl);
  }

  getProductById(id: number): Observable<any | undefined> {
    return this.getProducts().pipe(
      map((products: any[]) => products.find(product => product.id === id))
    );
  }


  /**
   * 
   * @param path  Json file path
   * @returns returns json Object
   * @author raj
   */
  parseJsonFile(path: string) {
    return this.http.get(path)
  }
}
