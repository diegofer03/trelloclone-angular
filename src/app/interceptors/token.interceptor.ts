import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { SessionService } from '../services/session.service';
import { request } from 'http';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const token = inject(SessionService).getToken();

  if(token){
    const clone = req.clone({
      headers: req.headers.set('Authorization', `Bearer $}`)
    })
    return next(clone);
  }

  return next(req);
};
