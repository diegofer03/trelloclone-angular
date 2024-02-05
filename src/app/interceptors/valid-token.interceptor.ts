import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { SessionService } from '../services/session.service';
import { Router } from '@angular/router';

export const validTokenInterceptor: HttpInterceptorFn = (req, next) => {
  const token = inject(SessionService).isValid();
  const router = inject(Router);
  // if(!token){
  //   router.navigate(['/login']);
  //   return next(req);
  // }

  return next(req);
};
