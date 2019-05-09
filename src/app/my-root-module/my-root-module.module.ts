import { NgModule } from '@angular/core';
import { NgxGalleryModule } from 'ngx-gallery';
import { PersistenceModule } from 'angular-persistence';
import { ScrollDispatchModule, ScrollingModule } from '@angular/cdk/scrolling';
import { NgxPayPalModule } from 'ngx-paypal';
import { EMatComponentsModule } from '../angular-components/basic-components/e-mat-components.module';
import { EModuleModules } from '../e-modules';
import { appRoutes } from '../app.routing';
import { LayoutModule } from '@angular/cdk/layout';
import { ETranslationModule } from '../e-translation/e-translation.module';
import { NguiAutoCompleteModule } from '@ngui/auto-complete';
import { RouteGuardModule } from '../angular-components/basic-components/route-guard/route-guard.module';

@NgModule({
  declarations: [],
  imports: [
    NgxGalleryModule,
    PersistenceModule,
    ScrollDispatchModule,
    ScrollingModule,
    EMatComponentsModule,
    EModuleModules,
    NgxPayPalModule,
    appRoutes,
    LayoutModule,
    ETranslationModule,
    NguiAutoCompleteModule,
    RouteGuardModule,
  ]
})

export class MyRootModuleModule { }
