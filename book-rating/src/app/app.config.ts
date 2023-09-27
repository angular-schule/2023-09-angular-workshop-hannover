import { ApplicationConfig } from '@angular/core';
import { PreloadAllModules, provideRouter, withDebugTracing, withPreloading, withRouterConfig } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes,
      // withDebugTracing()
      // withPreloading(PreloadAllModules)
    ),
    provideHttpClient() // NEU! Nur hier!
  ]
};
