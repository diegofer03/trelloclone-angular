import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const errorsInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((error) => {
      console.log(error.status)
      if([401].includes(error.status)){
        console.log('mugrosa api no sirve')
      }
      return throwError(()=>error)
    })
  );
};
