export const Code = {
    html: {
      content: `
      <div id="output"></div>
  `,
      language: 'html'
    },
    ts: {
      content: `
      import { Component, OnInit } from '@angular/core';
      import 'jquery';
      import "node_modules/jquery-ui-dist/jquery-ui.min.js";
      import 'pivottable';
      @Component({
        selector: 'app-e-mat-pivot-table',
        templateUrl: './e-mat-pivot-table.component.html',
        styleUrls: ['./e-mat-pivot-table.component.scss']
      })
      export class EMatPivotTableComponent implements OnInit {
        ngOnInit() {
          this.loadPivotTable();
        }
        loadPivotTable() {
          $(function(){
            $("#output").pivotUI(
                [
                    {color: "blue", shape: "circle"},
                    {color: "red", shape: "triangle"}
                ],
                {
                    rows: ["color"],
                    cols: ["shape"]
                }
            );
         });
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
