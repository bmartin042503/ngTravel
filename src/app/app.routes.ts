import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    { 
        path: 'home', 
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
    },
    { 
        path: 'signup',
        loadComponent: () => import('./pages/signup/signup.component').then(m => m.SignupComponent)
    },
    { 
        path: 'login',
        loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent)
    },
    { 
        path: 'schedule',
        loadComponent: () => import('./pages/schedule/schedule.component').then(m => m.ScheduleComponent)
    },
    { 
        path: 'cart',
        loadComponent: () => import('./pages/cart/cart.component').then(m => m.CartComponent)
    },
    {
        path: 'profile',
        loadComponent: () => import('./pages/profile/profile.component').then(m => m.ProfileComponent)
    },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', component: HomeComponent } // TODO: ide majd PageNotFoundComponent
];
