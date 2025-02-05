import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductDataService {
  private url='https://dummyjson.com/products';
  post:any;
  constructor(private http: HttpClient) {}
  getMethod(): Observable<any>{
    return this.http.get(this.url).pipe(
      catchError((error) => {
        console.error('Error fetching IP from Cloudflare', error);
        return of(null); // Return a fallback value if there's an error
      }));
  }
}
