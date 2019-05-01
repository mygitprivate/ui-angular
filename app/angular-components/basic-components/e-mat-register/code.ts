export const Code = {
    html: {
        content: `
        <mat-card class="example-card">
          <mat-card-header>
            <mat-card-title>Registor</mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <form class="example-form" [formGroup]="registerForm" (onSubmit)="registerFormVal(registerForm.value);">
              <table class="example-full-width" cellspacing="0">
                <tr>
                  <td>
                    <mat-form-field class="example-full-width">
                    <input matInput placeholder="First Name" formControlName="fname" name="fname">
                    </mat-form-field>
                  </td>
                </tr>
                <tr>
                <td><mat-form-field class="example-full-width">
                  <input matInput placeholder="Last Name" formControlName="lname" type="text" name="lname">
                </mat-form-field></td>
              </tr>
              <tr>
                <tr>
                <td><mat-form-field class="example-full-width">
                  <input matInput placeholder="Email" formControlName="email" type="email" name="email">
                </mat-form-field></td>
              </tr>
              <tr>
              <td><mat-form-field class="example-full-width">
                <input matInput placeholder="Phone Number" formControlName="phone" type="text" name="phone">
              </mat-form-field></td>
            </tr>
              <tr>
              <td><mat-form-field class="example-full-width">
                <input matInput placeholder="Password" formControlName="password" type="password" name="password">
              </mat-form-field></td>
            </tr>
            <tr>
            <td><mat-form-field class="example-full-width">
              <input matInput placeholder="Confirm Password" formControlName="cnfrmpassword" type="password" name="ConfirmPassword">
            </mat-form-field></td>
          </tr>
          <tr>
              <td colspan="2" class="content-center">
                  <button  mat-raised-button color="primary" [disabled]="!registerForm.valid" type="submit" (click)="registerFormVal(registerForm.value);">Register</button>
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
          selector: 'app-e-mat-login',
          templateUrl: './e-mat-register.component.html',
          styleUrls: ['./e-mat-register.component.scss']
        })
        export class EMatRegisterComponent{
        registerForm:FormGroup;

          constructor(private fb: FormBuilder) {

            this.registerForm = fb.group({
                'fname': [null, Validators.required],
                'lname': [null, Validators.required],
                'email': [null, Validators.compose([Validators.required, Validators.email])],
                'phone': [null, Validators.compose([Validators.required, Validators.maxLength(10), Validators.pattern("[0-9]{10}")])],
                'password':[null, Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(12)])],
                'cnfrmpassword':[null, Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(12)])]
            });
          }

          registerFormVal(data){
            if(data.password === data.cnfrmpassword){
              alert('Registered Successfully');
            }else{
              alert('Please check once Password and Confirm Password should be same');
            }
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
