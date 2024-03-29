export const Code = {
    html: {
      content: ` 
    <mat-slide-toggle>Slide me!</mat-slide-toggle>
  `,
      language: 'html'
    },
    ts: {
      content: `
    import { Component, OnInit } from '@angular/core';

    @Component({
      selector: 'e-mat-switch',
      templateUrl: './e-mat-switch.component.html',
      styleUrls: ['./e-mat-switch.component.scss']
    })
    export class EMatSwitchComponent implements OnInit {
    
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