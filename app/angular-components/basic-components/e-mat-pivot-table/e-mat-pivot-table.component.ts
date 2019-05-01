import { Component, OnInit } from '@angular/core';
import {Code} from './code';
import {EShareDataService} from '../../../e-shared/e-sharedata.service';
import 'jquery';
declare var $: any
import "node_modules/jquery-ui-dist/jquery-ui.min.js";
import 'pivottable';
@Component({
  selector: 'app-e-mat-pivot-table',
  templateUrl: './e-mat-pivot-table.component.html',
  styleUrls: ['./e-mat-pivot-table.component.scss']
})
export class EMatPivotTableComponent  implements OnInit {
  code:any;
  constructor(private eShareDataService : EShareDataService) { }

  ngOnInit() {
    this.code = Code;
    this.eShareDataService.pushCode(this.code);
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
