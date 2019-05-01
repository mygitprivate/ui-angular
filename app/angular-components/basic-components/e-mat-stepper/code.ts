export const Code = {
    html: {
        content: `
        <h1>1. Horizontal Stepper</h1>
        <button mat-raised-button (click)="isLinear = !isLinear" id="toggle-linear">
         {{!isLinear ? 'Enable linear mode' : 'Disable linear mode'}}
        </button>
        <mat-horizontal-stepper [linear]="isLinear" #stepper>
         <mat-step [stepControl]="firstFormGroup">
           <form [formGroup]="firstFormGroup">
             <ng-template matStepLabel>Fill out your name</ng-template>
             <mat-form-field>
               <input matInput placeholder="Last name, First name" formControlName="firstCtrl" required>
             </mat-form-field>
             <div>
               <button mat-button matStepperNext>Next</button>
             </div>
           </form>
         </mat-step>
         <mat-step [stepControl]="secondFormGroup">
           <form [formGroup]="secondFormGroup">
             <ng-template matStepLabel>Fill out your address</ng-template>
             <mat-form-field>
               <input matInput placeholder="Address" formControlName="secondCtrl" required>
             </mat-form-field>
             <div>
               <button mat-button matStepperPrevious>Back</button>
               <button mat-button matStepperNext>Next</button>
             </div>
           </form>
         </mat-step>
         <mat-step>
           <ng-template matStepLabel>Done</ng-template>
           You are now done.
           <div>
             <button mat-button matStepperPrevious>Back</button>
             <button mat-button (click)="stepper.reset()">Reset</button>
           </div>
         </mat-step>
        </mat-horizontal-stepper>
        <h1>2. Vertical Stepper</h1>
        <button mat-raised-button (click)="isLinear = !isLinear" id="toggle-linear">
          {{!isLinear ? 'Enable linear mode' : 'Disable linear mode'}}
        </button>
        <mat-vertical-stepper [linear]="isLinear" #stepper1>
          <mat-step [stepControl]="firstFormGroup">
            <form [formGroup]="firstFormGroup">
              <ng-template matStepLabel>Fill out your name</ng-template>
              <mat-form-field>
                <input matInput placeholder="Last name, First name" formControlName="firstCtrl" required>
              </mat-form-field>
              <div>
                <button mat-button matStepperNext>Next</button>
              </div>
            </form>
          </mat-step>
          <mat-step [stepControl]="secondFormGroup">
            <form [formGroup]="secondFormGroup">
              <ng-template matStepLabel>Fill out your address</ng-template>
              <mat-form-field>
                <input matInput placeholder="Address" formControlName="secondCtrl" required>
              </mat-form-field> 
              <div>
                <button mat-button matStepperPrevious>Back</button>
                <button mat-button matStepperNext>Next</button>
              </div>
            </form>
          </mat-step>
          <mat-step>
            <ng-template matStepLabel>Done</ng-template>
            You are now done.
            <div>
              <button mat-button matStepperPrevious>Back</button>
              <button mat-button (click)="stepper1.reset()">Reset</button>
            </div>
          </mat-step>
        </mat-vertical-stepper>
    `,
        language: 'html'
        },
    ts: {
        content: `
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

/**
 * @title Stepper overview
 */
@Component({
  selector: 'stepper-overview-example',
  templateUrl: 'stepper-overview-example.html',
  styleUrls: ['stepper-overview-example.css'],
})
export class StepperOverviewExample implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
}
            `,
        language: 'javascript'
        },
    css: {
        content: `   /** No CSS for this example */`,
        language: 'css'
        }
    }
