import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { map, take } from 'rxjs/operators';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);
  
  return authService.currentUser.pipe(
    take(1),
    map(user => {
      if (user) {
        return true;
      }
      
      console.log('Hozzáférés megtagadva!');
      router.navigate(['/login']);
      return false;
    })
  );
};

export const publicGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);
  
  return authService.currentUser.pipe(
    take(1),
    map(user => {
      if (!user) {
        return true;
      }
      
      console.log('Átirányítás a /home-ra..');
      router.navigate(['/home']);
      return false;
    })
  );
};