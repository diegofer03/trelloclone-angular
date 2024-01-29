import { CanActivateFn, Router } from '@angular/router';
import { SessionService } from '../services/session.service';
import { inject } from '@angular/core';

export const redirectsGuard: CanActivateFn = ( state) => {
  const sessionService = inject(SessionService)
  const route = inject(Router)
  const token = sessionService.isRefreshValid()
  console.log(token)
  console.log('reditect to app')
  if(token){
    route.navigate(['/home/boards']);
  }
  return true;
};
