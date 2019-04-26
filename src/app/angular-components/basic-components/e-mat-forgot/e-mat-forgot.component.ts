import { Component } from '@angular/core';

import { FormBuilder, FormGroup, Validators, FormsModule, NgForm } from '@angular/forms';
import {Code} from './code';
import {EShareDataService} from '../../../e-shared/e-sharedata.service';
@Component({
  selector: 'e-mat-forgot',
  templateUrl: './e-mat-forgot.component.html',
  styleUrls: ['./e-mat-forgot.component.scss']
})
export class EMatForgotComponent{
forgotForm:FormGroup;
  code:any;
  constructor(private fb: FormBuilder,private eShareDataService : EShareDataService, ) {

    this.forgotForm = fb.group({
        'newpassword':[null, Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(12)])],
        'confrmpassword':[null, Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(12)])]
    });
  }
  ngOnInit() {
    this.code = Code;
    this.eShareDataService.pushCode(this.code);
  }
  forgotFormVal(data){
    if(data.newpassword === data.confrmpassword){
      alert('Password Saved Successfully');
    }else{
      alert('Please check once New Password and Confirm Password should be same');
    }
  }
}
