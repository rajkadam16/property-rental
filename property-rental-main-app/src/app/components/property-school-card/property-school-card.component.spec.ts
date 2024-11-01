import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertySchoolCardComponent } from './property-school-card.component';

describe('PropertySchoolCardComponent', () => {
  let component: PropertySchoolCardComponent;
  let fixture: ComponentFixture<PropertySchoolCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PropertySchoolCardComponent]
    });
    fixture = TestBed.createComponent(PropertySchoolCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
