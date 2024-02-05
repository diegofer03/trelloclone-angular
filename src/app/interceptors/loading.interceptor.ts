import { HttpInterceptorFn } from '@angular/common/http';
import { UsersService } from '../services/users.service';
import { inject } from '@angular/core';
import { finalize, tap } from 'rxjs';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const userService = inject(UsersService)
  userService.loading$.next(true)
  return next(req).pipe(
    finalize(()=>{
      console.log('aqui')
      userService.loading$.next(false)
    })
  );
};
