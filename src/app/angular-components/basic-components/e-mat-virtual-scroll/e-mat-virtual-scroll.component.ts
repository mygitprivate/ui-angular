import {ChangeDetectionStrategy, Component, OnInit, ViewChild} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {Code} from './code';
import {EShareDataService} from '../../../e-shared/e-sharedata.service';
@Component({
  selector: 'e-mat-image-gallery',
  templateUrl: './e-mat-virtual-scroll.component.html',
  styleUrls: ['./e-mat-virtual-scroll.component.scss'],

})
export class EMatVirtualScrollComponent implements OnInit {
  code:any;
   numbers: number[] = [];
  constructor(private eShareDataService : EShareDataService) {
    for (let index = 0; index < 10000; index++) {
     this.numbers.push(index);
   }

   }
  ngOnInit() {
    this.code = Code;
    this.eShareDataService.pushCode(this.code);
  }


}
