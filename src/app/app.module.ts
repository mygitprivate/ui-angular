import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, APP_INITIALIZER} from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EModuleModules } from './e-modules/index';
import {MyNavComponent} from './my-nav/my-nav.component';
import { environment } from '../environments/environment';
import { El10nModule } from './e-l10n/el10n.module';
import {
  L10nConfig,
  L10nLoader,
  LocalizationModule,
  LocaleSeoModule,
  LocaleValidationModule,
  StorageStrategy,
  ProviderType,
  ISOCode,
  LogLevel
} from 'angular-l10n';
import { MyRootModuleModule } from './my-root-module/my-root-module.module';
import { CommonModule } from '@angular/common';
const l10nConfig: L10nConfig = {
    logger: {
        level: environment.production ? LogLevel.Off : LogLevel.Warn
    },
    locale: {
        languages: [
            { code: 'en', dir: 'ltr' },
            { code: 'it', dir: 'ltr' },
            { code: 'ar', dir: 'rtl' }
        ],
        defaultLocale: { languageCode: 'en', countryCode: 'US', numberingSystem: 'latn' },
        currency: 'USD',
        storage: StorageStrategy.Cookie,
        cookieExpiration: 30
    },
    translation: {
        providers: [
            { type: ProviderType.Static, prefix:'../assets/locale-'}
        ],
        caching: true,
        version: '7.0.0',
        rollbackOnError: true,
        composedKeySeparator: '.',
        missingValue: 'No key',
        i18nPlural: true
    },
    localizedRouting: {
        format: [ISOCode.Language, ISOCode.Country],
        defaultRouting: false,
        schema: [
            { text: 'United States', languageCode: 'en', countryCode: 'US', numberingSystem: 'latn', currency: 'USD' },
            { text: 'United Kingdom', languageCode: 'en', countryCode: 'GB', numberingSystem: 'latn', currency: 'GBP' },
            { text: 'Italia', languageCode: 'it', countryCode: 'IT', numberingSystem: 'latn', currency: 'EUR' },
            { text: 'المملكة العربية السعودية', languageCode: 'ar', countryCode: 'SA', numberingSystem: 'arab', currency: 'SAR' },
            {
                text: 'المملكة العربية السعودية - Arabic',
                languageCode: 'ar', countryCode: 'SA', numberingSystem: 'latn', currency: 'SAR'
            }
        ]
    }
};
// Advanced initialization.
export function initL10n(l10nLoader: L10nLoader): Function {
  return () => l10nLoader.load();
}
@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    EModuleModules,
    BrowserAnimationsModule,
    MyRootModuleModule,
    LocalizationModule.forRoot(l10nConfig),
    LocaleSeoModule.forRoot(),
    LocaleValidationModule.forRoot(),
    LocaleSeoModule.forRoot(),
    LocaleValidationModule.forRoot(),
    El10nModule,

  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initL10n,
      deps: [L10nLoader],
      multi: true
    }
],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
