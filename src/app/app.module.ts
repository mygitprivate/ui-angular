import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, APP_INITIALIZER} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersistenceModule } from 'angular-persistence';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';

import { EModuleModules } from './e-modules/index';
import { appRoutes } from './app.routing';
import { EMatComponentsModule } from './angular-components/basic-components/e-mat-components.module';
import { ETranslationModule } from './e-translation/e-translation.module';
import {MyNavComponent} from './my-nav/my-nav.component';

import { NguiAutoCompleteModule } from '@ngui/auto-complete';
import { RouteGuardModule } from './angular-components/basic-components/route-guard/route-guard.module';
import { NgxGalleryModule } from 'ngx-gallery';
import {ScrollingModule,ScrollDispatchModule} from '@angular/cdk/scrolling';
import { environment } from '../environments/environment';
// import {  I18nComponent } from './angular-components/basic-components/e-mat-language-switch/i18n/i18n.component';
/*
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
            { type: ProviderType.Static, prefix: './assets/locale-' }
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

export function initL10n(l10nLoader: L10nLoader): Function {
  return () => l10nLoader.load();
}*/
@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    // I18nComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    appRoutes,
    LayoutModule,
    EMatComponentsModule,
    EModuleModules,
    ETranslationModule,
    NguiAutoCompleteModule,
    RouteGuardModule,
    NgxGalleryModule,
    PersistenceModule,
    ScrollDispatchModule,
    ScrollingModule
  ],
  providers: [
    // {
    //     provide: APP_INITIALIZER,
    //     useFactory: initL10n,
    //     deps: [L10nLoader],
    //     multi: true
    // }
],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
