import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaypalgatewayComponent } from './e-mat-PaypalgatewayComponent.component';

describe('EMatFileUploadComponent', () => {
  let component: PaypalgatewayComponent;
  let fixture: ComponentFixture<PaypalgatewayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaypalgatewayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaypalgatewayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
