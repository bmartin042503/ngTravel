import { Routes } from '@angular/router';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { authGuard, publicGuard } from './guards/auth/auth.guard';

export const routes: Routes = [
    { 
        path: 'home', 
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
    },
    { 
        path: 'signup',
        loadComponent: () => import('./pages/signup/signup.component').then(m => m.SignupComponent),
        canActivate: [publicGuard]
    },
    { 
        path: 'login',
        loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent),
        canActivate: [publicGuard]
    },
    { 
        path: 'schedule',
        loadComponent: () => import('./pages/schedule/schedule.component').then(m => m.ScheduleComponent)
    },
    { 
        path: 'cart',
        loadComponent: () => import('./pages/cart/cart.component').then(m => m.CartComponent),
        canActivate: [authGuard]
    },
    {
        path: 'profile',
        loadComponent: () => import('./pages/profile/profile.component').then(m => m.ProfileComponent),
        canActivate: [authGuard]
    },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', component: PagenotfoundComponent }
];
