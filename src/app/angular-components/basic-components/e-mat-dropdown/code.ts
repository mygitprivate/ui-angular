export const Code = {
    html: {
      content: ` 
    <div>
    <mat-form-field>
      <mat-select placeholder="Favorite food">
        <mat-option *ngFor="let food of foods" [value]="food.value">
          {{food.viewValue}}
        </mat-option>
      </mat-select>
    </mat-form-field>
    </div>
  `,
      language: 'html'
    },
    ts: {
      content: `
    import { Component, OnInit } from '@angular/core';
    export interface Food {
      value: string;
      viewValue: string;
    }
    @Component({
      selector: 'app-e-mat-dropdown',
      templateUrl: './e-mat-dropdown.component.html',
      styleUrls: ['./e-mat-dropdown.component.scss']
    })
    export class EMatDropdownComponent implements OnInit {
      foods: Food[] = [
        {value: 'steak-0', viewValue: 'Steak'},
        {value: 'pizza-1', viewValue: 'Pizza'},
        {value: 'tacos-2', viewValue: 'Tacos'}
      ];
      constructor() { }
    
      ngOnInit() {
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