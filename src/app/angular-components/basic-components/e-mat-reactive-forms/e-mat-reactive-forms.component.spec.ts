import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EMatReactiveFormsComponent } from './e-mat-reactive-forms.component';

describe('EMatReactiveFormsComponent', () => {
  let component: EMatReactiveFormsComponent;
  let fixture: ComponentFixture<EMatReactiveFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EMatReactiveFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EMatReactiveFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
