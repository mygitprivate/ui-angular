import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';



import {Code} from './code';
import {EShareDataService} from '../../../e-shared/e-sharedata.service';
@Component({
  selector: 'app-e-mat-login',
  templateUrl: './e-mat-stepper.component.html',
  styleUrls: ['./e-mat-stepper.component.scss']
})
export class EMatStepperComponent {
  isLinear = false;
   firstFormGroup: FormGroup;
   secondFormGroup: FormGroup;
  code:any;
  constructor(private eShareDataService : EShareDataService, private _formBuilder: FormBuilder) { }
  ngOnInit() {
    this.code = Code;
    this.eShareDataService.pushCode(this.code);
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

}
