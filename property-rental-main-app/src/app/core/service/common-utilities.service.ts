import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonUtilitiesService {


  constructor(private http: HttpClient) { }


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
