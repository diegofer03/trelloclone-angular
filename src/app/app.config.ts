import { ApplicationConfig } from '@angular/core';
import { PreloadAllModules, provideRouter, withPreloading } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
// provideHttpClient(withFetch())
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withPreloading(PreloadAllModules)), provideClientHydration(), provideHttpClient()]
};
