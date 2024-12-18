import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppartmentDataComponent } from './appartment-data.component';

describe('AppartmentDataComponent', () => {
  let component: AppartmentDataComponent;
  let fixture: ComponentFixture<AppartmentDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppartmentDataComponent]
    });
    fixture = TestBed.createComponent(AppartmentDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
