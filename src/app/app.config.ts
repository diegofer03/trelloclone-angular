import { ApplicationConfig } from '@angular/core';
import { PreloadAllModules, provideRouter, withPreloading } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { tokenInterceptor } from './interceptors/token.interceptor';
import { errorsInterceptor } from './interceptors/errors.interceptor';
import { validTokenInterceptor } from './interceptors/valid-token.interceptor';
import { SsrCookieService } from 'ngx-cookie-service-ssr';
import { loadingInterceptor } from './interceptors/loading.interceptor';
import { provideAnimations } from '@angular/platform-browser/animations';

// provideHttpClient(withFetch())
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withPreloading(PreloadAllModules)),
    // provideClientHydration(),
    SsrCookieService,
    provideHttpClient(withInterceptors([errorsInterceptor, tokenInterceptor])), provideAnimations()]
};
