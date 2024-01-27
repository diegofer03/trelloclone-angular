import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { SessionService } from '../services/session.service';

export const tokenGuard: CanActivateFn = () => {
  const token = inject(SessionService).isValid();
  const router = inject(Router);
  console.log(token)
  console.log('reditect to login')
  if (!token) {
    router.navigate(['/login']);
    return false
  }
  return true;
};
