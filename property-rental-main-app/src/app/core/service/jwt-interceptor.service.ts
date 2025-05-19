import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token'); // Get the token from localStorage

    if (token) {
      const cloned = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}` // Attach the token as a Bearer token
        }
      });
      return next.handle(cloned); // Forward the cloned request
    }

    return next.handle(req); // Forward the request without modification if no token
  }
}
