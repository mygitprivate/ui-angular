export const Code = {
    html: {
        content: `
        <mat-card class="example-card">
          <mat-card-header>
            <mat-card-title>Forgot Password</mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <form class="example-form" [formGroup]="forgotForm">
              <table class="example-full-width" cellspacing="0">
                <tr>
                  <td>
                    <mat-form-field class="example-full-width">
                    <input matInput placeholder="New Password" formControlName="newpassword" name="fname">
                    </mat-form-field>
                  </td>
                </tr>
                <tr>
                <td><mat-form-field class="example-full-width">
                  <input matInput placeholder="Confirm Password" formControlName="confrmpassword" type="text" name="lname">
                </mat-form-field></td>
              </tr>
              <tr>
          <tr>
              <td colspan="2" class="content-center">
                  <button  mat-raised-button color="primary" [disabled]="!forgotForm.valid" type="submit" (click)="forgotFormVal(forgotForm.value);">Save</button>
              </td>
          </tr>
            </table>
            </form>
          </mat-card-content>
        </mat-card>
    `,
        language: 'html'
        },
    ts: {
        content: `
        import { Component } from '@angular/core';

        import { FormBuilder, FormGroup, Validators, FormsModule, NgForm } from '@angular/forms';
        @Component({
          selector: 'e-mat-forgot',
          templateUrl: './e-mat-forgot.component.html',
          styleUrls: ['./e-mat-forgot.component.scss']
        })
        export class EMatForgotComponent{
        forgotForm:FormGroup;
           constructor(private fb: FormBuilder,private eShareDataService : EShareDataService, ) {

            this.forgotForm = fb.group({
                'newpassword':[null, Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(12)])],
                'confrmpassword':[null, Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(12)])]
            });
          }
          ngOnInit() { }
          forgotFormVal(data){
            if(data.newpassword === data.confrmpassword){
              alert('Password Saved Successfully');
            }else{
              alert('Please check once New Password and Confirm Password should be same');
            }
          }
        }`,
        language: 'javascript'
        },
    css: {
        content: `
        /** No CSS for this example */
            `,
        language: 'css'
        }
    }
