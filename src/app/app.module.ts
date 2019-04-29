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
// import { NgxPayPalModule } from 'ngx-paypal';
import { NgxPayPalModule } from 'ngx-paypal';
import {ScrollingModule,ScrollDispatchModule} from '@angular/cdk/scrolling';
import { environment } from '../environments/environment';
// import {  I18nComponent } from './angular-components/basic-components/e-mat-language-switch/i18n/i18n.component';
import { El10nModule } from './e-l10n/el10n.module';

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
    ScrollingModule,
    LocalizationModule.forRoot(l10nConfig),
    LocaleSeoModule.forRoot(),
    LocaleValidationModule.forRoot(),
    NgxPayPalModule,
    El10nModule
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
