import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EMatGridComponent } from './e-mat-grid.component';

describe('EMatGridComponent', () => {
  let component: EMatGridComponent;
  let fixture: ComponentFixture<EMatGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EMatGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EMatGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
