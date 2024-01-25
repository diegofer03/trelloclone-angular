import { CanActivateFn, Router } from '@angular/router';
import { SessionService } from '../services/session.service';
import { inject } from '@angular/core';

export const redirectsGuard: CanActivateFn = (route, state) => {
  const token = inject(SessionService).getToken()
  if(token){
    inject(Router).navigate(['/boards']);
    return false;
  }
  return true;
};
