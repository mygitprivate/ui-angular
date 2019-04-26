import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EMatFormValidComponent } from './e-mat-formvalid.component';

describe('EMatFormValidComponent', () => {
  let component: EMatFormValidComponent;
  let fixture: ComponentFixture<EMatFormValidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EMatFormValidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EMatFormValidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
