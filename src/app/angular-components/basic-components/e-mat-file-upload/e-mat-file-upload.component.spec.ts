import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EMatFileUploadComponent } from './e-mat-file-upload.component';

describe('EMatFileUploadComponent', () => {
  let component: EMatFileUploadComponent;
  let fixture: ComponentFixture<EMatFileUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EMatFileUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EMatFileUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
