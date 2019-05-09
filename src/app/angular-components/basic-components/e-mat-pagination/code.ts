export const Code = {
    html: {
      content: `
      <mat-paginator [length]="100"
                     [pageSize]="10"
                     [pageSizeOptions]="[5, 10, 25, 100]">
      </mat-paginator>
    `,
      language: "html"
    },
    ts: {
      content: `
      import { Component, OnInit } from '@angular/core';

      @Component({
        selector: 'app-e-mat-pagination',
        templateUrl: './e-mat-pagination.component.html',
        styleUrls: ['./e-mat-pagination.component.scss']
      })
      export class EMatPaginationComponent {
      }
          `,
      language: "javascript"
    },
    css: {
      content: `
      /** No CSS for this example */
              `,
      language: "css"
    }
  };
  