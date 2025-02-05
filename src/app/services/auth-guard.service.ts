import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {
  constructor() { }
  // Example of authentication check using localStorage or sessionStorage
  isAuthenticated(): boolean {
    // Check if the JWT token exists in localStorage
    const token = localStorage.getItem('auth_token');
    return token != null;
  }

  // You can also create methods for login, logout, etc.
  login(token: string): void {
    localStorage.setItem('auth_token', token);
  }

  logout(): void {
    localStorage.removeItem('auth_token');
  }
}
