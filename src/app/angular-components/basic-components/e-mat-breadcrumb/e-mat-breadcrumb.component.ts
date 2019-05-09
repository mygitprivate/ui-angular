import { Component, OnInit } from '@angular/core';
import { Code } from './code';
import { EShareDataService } from '../../../e-shared/e-sharedata.service'
@Component({
  selector: 'app-e-mat-breadcrumb',
  templateUrl: './e-mat-breadcrumb.component.html',
  styleUrls: ['./e-mat-breadcrumb.component.scss']
})
export class EMatBreadcrumbComponent implements OnInit {

  code: any;
  constructor(private eShareDataService: EShareDataService) { }
  ngOnInit() {
    this.code = Code;
    this.eShareDataService.pushCode(this.code);
    // console.log(this.code)
  }

}
