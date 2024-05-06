import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable()
export class AuthService {
  private apiUrl = 'http://fishableapp.com/api/auth';

  constructor(private http: HttpClient) { }

  saveToken(token: string) {
    const expiresAt = Date.now() + (23 * 60 * 60 * 1000);
    localStorage.setItem('token', token);
    localStorage.setItem('expires_at', expiresAt.toString());
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { email, password }).pipe(
      tap(response => {
        if (response && response.token) {
          this.saveToken(response.token);
        }
      }),
      catchError(error => {
        console.error('Login error:', error);
        throw error;
      })
    );
  }

  register(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, { email, password }).pipe(
      tap(response => {
        if (response && response.token) {
          this.saveToken(response.token);
        }
      }),
      catchError(error => {
        console.error('Registration error:', error);
        throw error;
      })
    );
  }
}
