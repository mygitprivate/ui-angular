import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { Direction } from '@angular/cdk/bidi';
import {Code} from './code';
import { LocaleService, TranslationService, SearchService, L10N_CONFIG, L10nConfigRef } from 'angular-l10n';
import {EShareDataService} from '../e-shared/e-sharedata.service';

@Component({
    selector: 'app-lang-root',
    templateUrl: './applang.component.html'
})
/**
 * AppComponent class doesn't use decorators
 * because the view uses only directives and not the pipes to get the translation.
 */
export class AppLangComponent implements OnInit, OnDestroy {
    code:any;
    countryMenuItems: any[];

    get currentCountry(): string {
        return this.locale.getCurrentCountry();
    }

    get currentNumberingSystem(): string {
        return this.locale.getCurrentNumberingSystem();
    }

    dir: Direction;

    constructor(
        @Inject(L10N_CONFIG) private configuration: L10nConfigRef,
        private locale: LocaleService,
        private translation: TranslationService,
        private search: SearchService,
        private eShareDataService : EShareDataService,
    ) {
        this.countryMenuItems = this.configuration.localizedRouting.schema;
        this.code = Code;
        this.eShareDataService.pushCode(this.code);
    }

    ngOnInit(): void {
        this.search.updateHead('app');

        this.translation.translationChanged().subscribe(
            () => {
                this.dir = this.locale.getLanguageDirection() as Direction;
            }
        );

        this.translation.translationError.subscribe((error) => {
            if (error) {
                // console.log(error);
            }
        });
    }

    ngOnDestroy(): void { }

    selectLocale(language: string, country: string, numberingSystem: string, currency: string): void {
        this.locale.setDefaultLocale(language, country, '', numberingSystem);
        this.locale.setCurrentCurrency(currency);
    }

}
