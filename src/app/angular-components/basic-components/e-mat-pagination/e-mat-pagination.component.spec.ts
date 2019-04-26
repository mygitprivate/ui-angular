import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EMatPaginationComponent } from './e-mat-pagination.component';

describe('EMatPaginationComponent', () => {
  let component: EMatPaginationComponent;
  let fixture: ComponentFixture<EMatPaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EMatPaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EMatPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
