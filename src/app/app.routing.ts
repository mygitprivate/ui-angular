import { Routes, RouterModule } from "@angular/router";
import { EDashboardComponent, ELayoutComponent } from './e-modules/index';
import { ModuleWithProviders } from "@angular/core";

//import { ETranslationComponent } from './e-translation/e-translation.component';
//import { AppLangComponent } from './e-l10n/applang.component';
import {
  EMatDatePickerComponent, EMatTimepickerComponent,
  EMatSpinnerComponent, EMatTabsComponent,
  EMatTooltipComponent, EMatProgressbarComponent,
  EMatSwitchComponent, EMatToastComponent,
  EMatDialogComponent,
  EMatMenuComponent, EMatSliderComponent,
  EMatCarouselComponent, EMatBreadcrumbComponent,
  EMatMessageboxComponent, EMatNavigationComponent,EMatAutocompleteComponent,EMatAccordianComponent, EMatNotificationComponent,
  EMatMapComponent,
  EMatVideoComponent,EMatDropdownComponent, ECalenderComponent,EDualRangeSliderComponent,EMatReactiveFormsComponent,
  EMatTemplateDrivenFormsComponent,EMatPaginationComponent,EMatGridComponent,EMatFileUploadComponent,EMatFilterTableComponent,
  EMatInlineEditTableComponent,EMatPivotTableComponent,
  EMatLoginComponent,EMatFormValidComponent,
  EMatSurveyComponent,EMatDatagridComponent,
  EMatSortTableComponent,EMatStepperComponent,
  EMatIconsComponent, EMatRegisterComponent,
  EMatForgotComponent,
  EMatDragDropComponent,EMatVirtualScrollComponent
} from './angular-components/basic-components/index';



const routes: Routes = [
  {
    path: 'notification', component: ELayoutComponent, children: [
      {
        path: '', component: EMatNotificationComponent, outlet: 'basic', data: { name: 'Notification', type : 'Custom' }
      }
    ]
  },
  {
    path: 'map', component: ELayoutComponent, children: [
      {
        path: '', component: EMatMapComponent, outlet: 'basic', data: { name: 'Map', type : 'Custom' }
      }
    ]
  },
  {
    path: 'video', component: ELayoutComponent, children: [
      {
        path: '', component: EMatVideoComponent, outlet: 'basic', data: { name: 'Video', type : 'Custom' }
      }
    ]
  },
  {
    path: 'dropdown', component: ELayoutComponent, children: [
      {
        path: '', component: EMatDropdownComponent, outlet: 'basic', data: { name: 'Dropdown', type : 'Material' }
      }
    ]
  },
  {
    path: 'navigation', component: ELayoutComponent, children: [
      {
        path: '', component: EMatNavigationComponent, outlet: 'basic', data: { name: 'Navigation', type : 'Material' }
      }
    ]
  },
  {
    path: 'date-Picker', component: ELayoutComponent, children: [
      {
        path: '', component: EMatDatePickerComponent, outlet: 'basic', data: { name: 'Datepicker', type : 'Material' }
      }
    ]
  },
  {
    path: 'time-Picker', component: ELayoutComponent, children: [
      {
        path: '', component: EMatTimepickerComponent, outlet: 'basic', data: { name: 'Timepicker', type : 'Material' }
      }
    ]
  },
  {
    path: 'dialog', component: ELayoutComponent, children: [
      {
        path: '', component: EMatDialogComponent, outlet: 'basic', data: { name: 'Dialog', type : 'Material' }
      }
    ]
  },
  {
    path: 'tooltip', component: ELayoutComponent, children: [
      {
        path: '', component: EMatTooltipComponent, outlet: 'basic', data: { name: 'Tooltip', type : 'Material' }
      }
    ]
  },
  {
    path: 'menu', component: ELayoutComponent, children: [
      {
        path: '', component: EMatMenuComponent, outlet: 'basic', data: { name: 'Menu', type : 'Material' }
      }
    ]
  },
  {
    path: 'spinner', component: ELayoutComponent, children: [
      {
        path: '', component: EMatSpinnerComponent, outlet: 'basic', data: { name: 'Spinner', type : 'Material' }
      }
    ]
  },
  {
    path: 'sliders', component: ELayoutComponent, children: [
      {
        path: '', component: EMatSliderComponent, outlet: 'basic', data: { name: 'Slider', type : 'Material' }
      }
    ]
  },
  {
    path: 'carousel', component: ELayoutComponent, children: [
      {
        path: '', component: EMatCarouselComponent, outlet: 'basic', data: { name: 'Carousel', type : 'Material' }
      }
    ]
  },
  {
    path: 'breadcrumb', component: ELayoutComponent, children: [
      {
        path: '', component: EMatBreadcrumbComponent, outlet: 'basic', data: { name: 'Breadcrumb', type : 'Custom' }
      }
    ]
  },
  {
    path: 'messagebox', component: ELayoutComponent, children: [
      {
        path: '', component: EMatMessageboxComponent, outlet: 'basic', data: { name: 'Messagebox', type : 'Custom' }
      }
    ]
  },
  {
    path: 'progressbar', component: ELayoutComponent, children: [
      {
        path: '', component: EMatProgressbarComponent, outlet: 'basic', data: { name: 'Progressbar', type : 'Custom' }
      }
    ]
  },
  {
    path: 'switch', component: ELayoutComponent, children: [
      {
        path: '', component: EMatSwitchComponent, outlet: 'basic', data: { name: 'Switch', type : 'Custom' }
      }
    ]
  },
  {
    path: 'toast', component: ELayoutComponent, children: [
      {
        path: '', component: EMatToastComponent, outlet: 'basic', data: { name: 'Toast', type : 'Material' }
      }
    ]
  },
  {
    path: 'tabs', component: ELayoutComponent, children: [
      {
        path: '', component: EMatTabsComponent, outlet: 'basic', data: { name: 'Tabs', type : 'Material' }
      }
    ]
  },
  {
    path: 'accordian', component: ELayoutComponent, children: [
      {
        path: '', component: EMatAccordianComponent, outlet: 'basic', data: { name: 'Accordian', type : 'Material' }
      }
    ]
  },
  {
    path: 'calendar', component: ELayoutComponent, children: [
      {
        path: '', component: ECalenderComponent, outlet: 'basic', data: { name: 'Calendar', type : 'Material' }
      }
    ]
  },
  {
    path: 'autocomplete', component: ELayoutComponent, children: [
      {
        path: '', component:EMatAutocompleteComponent , outlet: 'basic', data: { name: 'Autocomplete', type : 'Material' }
      }
    ]
  },
  {
    path: 'dualslider', component: ELayoutComponent, children: [
      {
        path: '', component:EDualRangeSliderComponent , outlet: 'basic', data: { name: 'Dual Slider', type : 'Custom' }
      }
    ]
  },
  {
    path: 'reactive-Forms', component: ELayoutComponent, children: [
      {
        path: '', component:EMatReactiveFormsComponent , outlet: 'basic', data: { name: 'Reactive Forms', type : 'Material' }
      }
    ]
  },
  {
    path: 'template-Driven-Forms', component: ELayoutComponent, children: [
      {
        path: '', component:EMatTemplateDrivenFormsComponent , outlet: 'basic', data: { name: 'Template Driven Forms', type : 'Material' }
      }
    ]
  },
  { path: 'pagination', component: ELayoutComponent, children: [
      {
      path: '', component:EMatPaginationComponent , outlet: 'basic', data: { name: 'Pagination', type : 'Material' }
     }
   ]
 },
  { path: 'grid', component: ELayoutComponent, children: [
     {
      path: '', component:EMatGridComponent , outlet: 'basic', data: { name: 'Grid', type : 'Material' }
      }
  ]
 },
 { path: 'file-Upload', component: ELayoutComponent, children: [
  {
   path: '', component:EMatFileUploadComponent , outlet: 'basic', data: { name: 'File Upload', type : 'Custom' }
   }
]
},
{ path: 'filter-Table', component: ELayoutComponent, children: [
  {
   path: '', component:EMatFilterTableComponent , outlet: 'basic', data: { name: 'Filter Table', type : 'Material' }
   }
]
},
{ path: 'table-Inline-Edit', component: ELayoutComponent, children: [
  {
   path: '', component:EMatInlineEditTableComponent , outlet: 'basic', data: { name: 'Inline Edit Table', type : 'Material' }
   }
]
},
{ path: 'pivot-Table', component: ELayoutComponent, children: [
  {
   path: '', component:EMatPivotTableComponent , outlet: 'basic', data: { name: 'Pivot Table', type : 'Material' }
   }
]
},
{ path: 'login', component: ELayoutComponent, children: [
  {
   path: '', component:EMatLoginComponent , outlet: 'basic', data: { name: 'Login Form', type : 'Material' }
   }
]
},

{ path: 'formValidations', component: ELayoutComponent,children:[
   {path: '', component:EMatFormValidComponent , outlet: 'basic', data: { name: 'FormValidations', type : 'Material' }}
]},
{ path: 'survay-Forms', component: ELayoutComponent,children:[
   {path: '', component:EMatSurveyComponent , outlet: 'basic', data: { name: 'Survey Forms', type : 'SurveyJS' }}
]},
{ path: 'datagrid', component: ELayoutComponent,children:[
   {path: '', component:EMatDatagridComponent , outlet: 'basic', data: { name: 'Data Grid', type : 'Materials' }}
]},
{ path: 'sortable-Table', component: ELayoutComponent,children:[
   {path: '', component:EMatSortTableComponent , outlet: 'basic', data: { name: 'Sortable Table', type : 'Materials' }}
]},
{ path: 'stepper', component: ELayoutComponent,children:[
   {path: '', component:EMatStepperComponent , outlet: 'basic', data: { name: 'Stepper', type : 'Materials' }}
]},
{ path: 'icons', component: ELayoutComponent,children:[
   {path: '', component:EMatIconsComponent , outlet: 'basic', data: { name: 'Icons', type : 'Materials' }}
]},
{ path: 'register', component: ELayoutComponent,children:[
   {path: '', component:EMatRegisterComponent , outlet: 'basic', data: { name: 'Registror Form', type : 'Materials' }}
]},
{ path: 'forgot', component: ELayoutComponent,children:[
   {path: '', component:EMatForgotComponent , outlet: 'basic', data: { name: 'Forgot Form', type : 'Materials' }}
]},

{ path: 'drag-Drop', component: ELayoutComponent,children:[
   {path: '', component:EMatDragDropComponent , outlet: 'basic', data: { name: 'Drag And Drop', type : 'Materials' }}
]},
{ path: 'virtual-Scrolling', component: ELayoutComponent,children:[
   {path: '', component:EMatVirtualScrollComponent , outlet: 'basic', data: { name: 'Virtual Scrolling', type : 'Materials' }}
]},

  { path: 'dashboard', component: EDashboardComponent },
  { path: 'layout', component: ELayoutComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];

export const appRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
