import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EMatTemplateDrivenFormsComponent } from './e-mat-template-driven-forms.component';

describe('EMatTemplateDrivenFormsComponent', () => {
  let component: EMatTemplateDrivenFormsComponent;
  let fixture: ComponentFixture<EMatTemplateDrivenFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EMatTemplateDrivenFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EMatTemplateDrivenFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
