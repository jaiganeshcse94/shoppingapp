import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { CartComponent } from './pages/cart/cart.component';
import { AuthGuard } from './auth/auth-gaurd';
export const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: "login", component: LoginComponent },
    { path: "cart", component: CartComponent },
    { path: "**", pathMatch: "full", component: LoginComponent },
];
