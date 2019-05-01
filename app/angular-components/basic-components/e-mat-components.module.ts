import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { ESharedModule } from '../../e-shared/e-shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import {
  EMatDatePickerComponent, EMatTimepickerComponent,
  EMatSpinnerComponent, EMatTabsComponent,
  EMatTooltipComponent, EMatProgressbarComponent,
  EMatSwitchComponent, EMatToastComponent,
  EMatDialogPopupComponent, EMatDialogComponent,
  EMatMenuComponent, EMatSliderComponent,
  EMatCarouselComponent, EMatBreadcrumbComponent,
  EMatMessageboxComponent, EMatNavigationComponent,
  ELayoutComponent,EMatAccordianComponent, EMatNotificationComponent,
  EMatMapComponent,EMatVideoComponent,EMatDropdownComponent,EMatAutocompleteComponent,
  ECalenderComponent,EDualRangeSliderComponent,
  EMatReactiveFormsComponent,
  EMatTemplateDrivenFormsComponent,
  EMatPaginationComponent,
  EMatGridComponent,
  EMatFileUploadComponent,EMatFilterTableComponent,
  EMatInlineEditTableComponent,
  EMatPivotTableComponent,
  EMatLoginComponent,
  EMatFormValidComponent,
  EMatSurveyComponent,
  EMatDatagridComponent,
  EMatSortTableComponent,
  EMatStepperComponent,
  EMatIconsComponent,
  EMatRegisterComponent,
  EMatForgotComponent,
  EMatCrudTableComponent,
  EMatDragDropComponent,
  EMatVirtualScrollComponent,
  EMatLanguageSwitchComponent,
  PaypalgatewayComponent
  
  // RouteGuardComponent
} from './index';
import * as SurveyEditor from 'surveyjs-editor';
import * as Survey from 'survey-angular';

import {EventSesrvice} from './e-calender/events.service';



@NgModule({
  imports: [
    ESharedModule,
    ReactiveFormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [],
  providers : [EventSesrvice],
  declarations:
  [ EMatDatePickerComponent, EMatDialogComponent,
    EMatMenuComponent, EMatDialogPopupComponent,
    ELayoutComponent, EMatTabsComponent,
    EMatSpinnerComponent, EMatTimepickerComponent,
    EMatTooltipComponent, EMatProgressbarComponent,
    EMatSwitchComponent, EMatToastComponent,
    EMatSliderComponent, EMatCarouselComponent,
    EMatBreadcrumbComponent, EMatMessageboxComponent,
    EMatNavigationComponent,
    EMatAccordianComponent,
    EMatNotificationComponent,
    EMatMapComponent,
    EMatVideoComponent,
    EMatDropdownComponent,
    EMatAutocompleteComponent,
    ECalenderComponent,
    EDualRangeSliderComponent,
    EMatReactiveFormsComponent,
    EMatTemplateDrivenFormsComponent,
    EMatPaginationComponent,
    EMatGridComponent,
    EMatFileUploadComponent,
    EMatFilterTableComponent,
    EMatInlineEditTableComponent,
    EMatPivotTableComponent,
    EMatLoginComponent,
    EMatFormValidComponent,
    EMatSurveyComponent,
    EMatDatagridComponent,
    EMatSortTableComponent,
    EMatStepperComponent,
    EMatIconsComponent,
   EMatRegisterComponent,
   EMatForgotComponent,
   EMatCrudTableComponent,
   EMatDragDropComponent,
   EMatVirtualScrollComponent,
   EMatLanguageSwitchComponent,
   PaypalgatewayComponent
    
    // RouteGuardComponent
    ],
    entryComponents: [EMatDialogComponent, EMatDialogPopupComponent],

})
export class EMatComponentsModule {}
