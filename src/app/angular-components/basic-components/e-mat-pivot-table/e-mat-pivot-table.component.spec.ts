import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EMatPivotTableComponent } from './e-mat-pivot-table.component';

describe('EMatPivotTableComponent', () => {
  let component: EMatPivotTableComponent;
  let fixture: ComponentFixture<EMatPivotTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EMatPivotTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EMatPivotTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
