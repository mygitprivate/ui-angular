import { Component, OnInit } from '@angular/core';
import {Code} from './code';
import {EShareDataService} from '../../../e-shared/e-sharedata.service';
// import { IPayPalConfig, } from 'ngx-paypal';

@Component({
  selector: 'app-e-mat-file-upload',
  templateUrl: './e-mat-PaypalgatewayComponent.component.html',
  styleUrls: ['./e-mat-PaypalgatewayComponent.component.scss']
})
export class PaypalgatewayComponent implements OnInit {
  // public payPalConfig?: PayPalConfig;

  photoFormData:FormData;
  code:any;
  constructor(private eShareDataService : EShareDataService) { }
  ngOnInit() {
    this.code = Code;
    this.eShareDataService.pushCode(this.code);
  }
 
}
