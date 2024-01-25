import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { SessionService } from '../services/session.service';

export const tokenGuard: CanActivateFn = (route, state) => {
  const token = inject(SessionService).getToken()
  if(!token){
    inject(Router).navigate(['/login']);
    return false;
  }
  return true;
};
