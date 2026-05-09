import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  APP_INITIALIZER,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';

import { routes } from './app.routes';
import { CacheBustingTranslateLoader } from './i18n-loader';

export function initializeApp(translate: TranslateService) {
  return () => {
    translate.setFallbackLang('pl');
    return translate.use('pl');
  };
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(),
    TranslateModule.forRoot({
      fallbackLang: 'pl',
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => new CacheBustingTranslateLoader(http),
        deps: [HttpClient],
      },
    }).providers!,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [TranslateService],
      multi: true,
    },
  ],
};
