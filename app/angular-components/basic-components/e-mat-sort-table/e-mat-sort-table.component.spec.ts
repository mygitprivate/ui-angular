import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EMatInlineEditTableComponent } from './e-mat-inline-edit-table.component';

describe('EMatInlineEditTableComponent', () => {
  let component: EMatInlineEditTableComponent;
  let fixture: ComponentFixture<EMatInlineEditTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EMatInlineEditTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EMatInlineEditTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
