import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { SessionService } from '../services/session.service';
import { request } from 'http';
import { AuthService } from '../services/auth.service';
import { catchError, switchMap, throwError } from 'rxjs';
import { Router } from '@angular/router';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const validToken = inject(SessionService).isValid();
  const authService = inject(AuthService)
  const router = inject(Router);

  if(validToken){
    const token = inject(SessionService).getToken()
    const clone = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`)
    })
    console.log('valido')
    return next(clone);

  }else{
    const refreshToken = inject(SessionService).getRefreshToken();
    const isValidRefreshToken = inject(SessionService).isRefreshValid();
    // console.log('refresh')
    if (refreshToken && isValidRefreshToken) {
      authService.logout()
      router.navigate(['/login']);
      // console.log(refreshToken, isValidRefreshToken)
      // authService.refreshToken(refreshToken).subscribe({
      //   next: (data) => {
      //     console.log('weqeqw')
      //   }
      // })
    //   .pipe(
    //     switchMap(() => {
    //       console.log('aqui')
    //       const accessToken = inject(SessionService).getToken();
    //       if (accessToken) {
    //         const authRequest = req.clone({
    //           headers: req.headers.set('Authorization', `Bearer ${accessToken}`)
    //         });
    //         return next(authRequest);
    //       }
    //       return next(req);
    //     }),
    //     catchError((error) => {

    //       return throwError(() => error);
    //     })
    //   )
    }
    return next(req);
  }
};
