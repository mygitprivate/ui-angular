import { Component, OnInit } from '@angular/core';
import {Code} from './code';
import {EShareDataService} from '../../../e-shared/e-sharedata.service';

@Component({
  selector: 'app-e-mat-pagination',
  templateUrl: './e-mat-pagination.component.html',
  styleUrls: ['./e-mat-pagination.component.scss']
})
export class EMatPaginationComponent {

  code:any;
  constructor(private eShareDataService : EShareDataService) { }
  ngOnInit() {
    this.code = Code;
    this.eShareDataService.pushCode(this.code);
  }
}
 