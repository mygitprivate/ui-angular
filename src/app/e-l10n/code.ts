export const Code = {
  html: {
    content: ` 
    <mat-card>
    <div class="app-toolbar">
        <h1 l10nTranslate>app.title</h1>

        <span class="fill-remaining-space"></span>
        <div class="menu-section">
            <button mat-icon-button [matMenuTriggerFor]="countryMenu" aria-label="Open x-positioned menu">
                <mat-icon>translate</mat-icon>
            </button>

            <mat-menu xPosition="before" #countryMenu="matMenu" class="before">
                <a *ngFor="let item of countryMenuItems"
                    (click)="selectLocale(item.languageCode, item.countryCode, item.numberingSystem, item.currency)"
                    mat-menu-item>
                    {{ item.text }}
                    <mat-icon
                        *ngIf="currentCountry == item.countryCode && currentNumberingSystem == item.numberingSystem">
                        done</mat-icon>
                </a>
            </mat-menu>
        </div>

    </div>
    <span l10nTranslate>app.subtitle</span>
    <div class="app-content">
        <router-outlet></router-outlet>
    </div>
</mat-card>   
`,
    language: 'html'
  },
  ts: {
    content: `
    import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
    import { Direction } from '@angular/cdk/bidi';
     import { LocaleService, TranslationService, SearchService, L10N_CONFIG, L10nConfigRef } from 'angular-l10n';
     
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
            
        ) {
            this.countryMenuItems = this.configuration.localizedRouting.schema;
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

  `,
  language: 'javascript'
},
  css: {
    content: `
  /** No CSS for this example */
        `,
    language: 'css'
  }
}