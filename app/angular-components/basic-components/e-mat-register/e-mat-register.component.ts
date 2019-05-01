import { Component } from '@angular/core';

import { FormBuilder, FormGroup, Validators, FormsModule, NgForm } from '@angular/forms';
import {Code} from './code';
import {EShareDataService} from '../../../e-shared/e-sharedata.service';
@Component({
  selector: 'app-e-mat-login',
  templateUrl: './e-mat-register.component.html',
  styleUrls: ['./e-mat-register.component.scss']
})
export class EMatRegisterComponent{
registerForm:FormGroup;
  code:any;
  constructor(private fb: FormBuilder,private eShareDataService : EShareDataService, ) {

    this.registerForm = fb.group({
        'fname': [null, Validators.required],
        'lname': [null, Validators.required],
        'email': [null, Validators.compose([Validators.required, Validators.email])],
        'phone': [null, Validators.compose([Validators.required, Validators.maxLength(10), Validators.pattern("[0-9]{10}")])],
        'password':[null, Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(12)])],
        'cnfrmpassword':[null, Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(12)])]
    });
  }
  ngOnInit() {
    this.code = Code;
    this.eShareDataService.pushCode(this.code);
  }
  registerFormVal(data){
    if(data.password === data.cnfrmpassword){
      alert('Registered Successfully');
    }else{
      alert('Please check once Password and Confirm Password should be same');
    }
  }
}
