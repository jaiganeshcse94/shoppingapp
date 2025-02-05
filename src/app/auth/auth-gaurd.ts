// src/app/auth/auth-guard.service.ts

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthGuardService } from '../services/auth-guard.service'; // Import your AuthService

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthGuardService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    // Check if the user is authenticated (you may use a token, local storage, etc.)
    if (this.authService.isAuthenticated()) {
      return true;
    } else {
      // If the user is not authenticated, redirect to login page
      this.router.navigate(['/login'], 
        // { queryParams: { returnUrl: state.url } }
      );
      return false;
    }
  }
}
