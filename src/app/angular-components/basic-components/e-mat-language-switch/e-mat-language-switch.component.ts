import { Component, OnInit, Inject} from '@angular/core';
 
import {Code} from './code';
import {EShareDataService} from '../../../e-shared/e-sharedata.service';
// import { LocaleService, TranslationService, SearchService, L10N_CONFIG, L10nConfigRef } from 'angular-l10n';

@Component({
  selector: 'e-mat-language-switch',
  templateUrl: './e-mat-language-switch.component.html',
  styleUrls: ['./e-mat-language-switch.component.scss']
})
export class EMatLanguageSwitchComponent implements OnInit {
  code:any;
  countryMenuItems: any[];
  constructor( 
  private eShareDataService : EShareDataService,
   ) { 
       
    }
  ngOnInit() {
    this.code = Code;
    this.eShareDataService.pushCode(this.code);
  }
  
}
