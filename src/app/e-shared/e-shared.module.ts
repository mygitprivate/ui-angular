import { NgModule,ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { SlickModule } from 'ngx-slick';

import { CovalentLayoutModule } from '@covalent/core/layout';
import { CovalentStepsModule  } from '@covalent/core/steps';
/* any other core modules */
// (optional) Additional Covalent Modules imports
import { CovalentHttpModule } from '@covalent/http';
import { CovalentHighlightModule } from '@covalent/highlight';
import { CovalentMarkdownModule } from '@covalent/markdown';
import { CovalentDynamicFormsModule } from '@covalent/dynamic-forms';
import { CovalentNotificationsModule } from '@covalent/core/notifications';
import { CovalentMessageModule } from '@covalent/core/message';
import { PrismModule } from '@ngx-prism/core';
import { DocsExampleModule } from '@ngx-docs/example'; // added

import {EShareDataService} from './e-sharedata.service';
import {EAnimationService} from './e-animation.service';
import { ECustomIconService } from './e-custom-icon.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FilterPipe, KeyValuesPipe, DecodeURIPipe, DatePipe, DateTimePipe, FlagPipe, CurrencyPipe } from './utils/pipes';
import { IonRangeSliderModule } from "ng2-ion-range-slider";
import { FullCalendarModule } from 'ng-fullcalendar';
// import {DragDropModule} from '@angular/cdk/drag-drop';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {AgmCoreModule  } from '@agm/core';
import { NgxImageGalleryModule } from 'ngx-image-gallery';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    CdkTableModule,
    CdkTreeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    NgxMaterialTimepickerModule.forRoot(),
    SlickModule.forRoot(),
    CovalentLayoutModule,
    CovalentStepsModule,
    // (optional) Additional Covalent Modules imports
   CovalentHttpModule.forRoot(),
    CovalentHighlightModule,
    CovalentMarkdownModule,
    CovalentDynamicFormsModule,
    CovalentNotificationsModule,
    CovalentMessageModule,
    NgxImageGalleryModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyCmsUHbRc-5Gs4sPYFgrcC487-qdhG6otI",
      libraries: ["places"]
    }),
    DocsExampleModule,

    // @ngx-prism
    PrismModule,
    FlexLayoutModule,
    IonRangeSliderModule,
    FullCalendarModule,
    DragDropModule
  ],
  exports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    CdkTableModule,
    CdkTreeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    NgxMaterialTimepickerModule,
    SlickModule,
    CovalentLayoutModule,
    CovalentStepsModule,
    // (optional) Additional Covalent Modules imports
   CovalentHttpModule,
    CovalentHighlightModule,
    CovalentMarkdownModule,
    CovalentDynamicFormsModule,
    CovalentNotificationsModule,
    CovalentMessageModule,
    AgmCoreModule,
    DocsExampleModule,
    PrismModule,
    FlexLayoutModule,
    IonRangeSliderModule,
    FullCalendarModule,
    NgxImageGalleryModule,
    DragDropModule
  ],
  declarations: [FilterPipe, KeyValuesPipe, DecodeURIPipe, DatePipe, DateTimePipe, FlagPipe, CurrencyPipe],
  providers : [EShareDataService,ECustomIconService,EAnimationService]
})
export class ESharedModule {
  static forRoot(): ModuleWithProviders {
    return {
        ngModule: ESharedModule,
        providers: [
          EShareDataService,ECustomIconService,EAnimationService
        ],
    };
}
}
