import { Component, OnInit, Inject} from '@angular/core';
 
import {Code} from './code';
import {EShareDataService} from '../../../e-shared/e-sharedata.service';
import { LocaleService, TranslationService, SearchService, L10N_CONFIG, L10nConfigRef } from 'angular-l10n';

@Component({
  selector: 'e-mat-language-switch',
  templateUrl: './e-mat-language-switch.component.html',
  styleUrls: ['./e-mat-language-switch.component.scss']
})
export class EMatLanguageSwitchComponent implements OnInit {
  code:any;
  countryMenuItems: any[];
  constructor( 
    @Inject(L10N_CONFIG) private configuration: L10nConfigRef,
        private locale: LocaleService,
        private translation: TranslationService,
        private search: SearchService,
  private eShareDataService : EShareDataService,
   ) { 
    this.countryMenuItems = this.configuration.localizedRouting.schema;
    }
  ngOnInit() {
    this.code = Code;
    this.eShareDataService.pushCode(this.code);
  }
   
selectLocale(language: string, country: string, numberingSystem: string, currency: string): void {
  this.locale.setDefaultLocale(language, country, '', numberingSystem);
  this.locale.setCurrentCurrency(currency);
}
  
}
