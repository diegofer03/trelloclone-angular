import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { SessionService } from '../services/session.service';
import { request } from 'http';
import { AuthService } from '../services/auth.service';
import { switchMap } from 'rxjs';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const token = inject(SessionService).getToken();
  const authService = inject(AuthService)

  if(token){
    const clone = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`)
    })
    return next(clone);
  }else{
    const refreshToken = inject(SessionService).getRefreshToken();
    const isValidRefreshToken = inject(SessionService).isRefreshValid();
    console.log(refreshToken )
    console.log(isValidRefreshToken)
    if (refreshToken && isValidRefreshToken) {
      return authService.refreshToken(refreshToken)
      .pipe(
        switchMap(() => {
          const accessToken = inject(SessionService).getToken();
          if (accessToken) {
            const authRequest = req.clone({
              headers: req.headers.set('Authorization', `Bearer ${accessToken}`)
            });
            return next(authRequest);
          }
          return next(req);
        }),
      )
    }
    return next(req);
  }

  // return next(req);
};
