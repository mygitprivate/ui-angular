export const Code = {
    html: {
      content: ` 
      <mat-grid-list cols="2" rowHeight="2:1">
        <mat-grid-tile>1</mat-grid-tile>
        <mat-grid-tile>2</mat-grid-tile>
        <mat-grid-tile>3</mat-grid-tile>
        <mat-grid-tile>4</mat-grid-tile>
      </mat-grid-list>
  `,
      language: 'html'
    },
    ts: {
      content: `
      import { Component, OnInit } from '@angular/core';

      @Component({
        selector: 'app-e-mat-grid',
        templateUrl: './e-mat-grid.component.html',
        styleUrls: ['./e-mat-grid.component.scss']
      })
      export class EMatGridComponent {
      }
        `,
    language: 'javascript'
  },
    css: {
      content: `
      mat-grid-tile {
        background: lightblue;
      }          `,
      language: 'css'
    }
  }