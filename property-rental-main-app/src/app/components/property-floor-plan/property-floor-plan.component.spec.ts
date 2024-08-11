import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyFloorPlanComponent } from './property-floor-plan.component';

describe('PropertyFloorPlanComponent', () => {
  let component: PropertyFloorPlanComponent;
  let fixture: ComponentFixture<PropertyFloorPlanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PropertyFloorPlanComponent]
    });
    fixture = TestBed.createComponent(PropertyFloorPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
