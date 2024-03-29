import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EMatFilterTableComponent } from './e-mat-filter-table.component';

describe('EMatFilterTableComponent', () => {
  let component: EMatFilterTableComponent;
  let fixture: ComponentFixture<EMatFilterTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EMatFilterTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EMatFilterTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
