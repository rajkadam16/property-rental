import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyDataFacilitiesComponent } from './property-data-facilities.component';

describe('PropertyDataFacilitiesComponent', () => {
  let component: PropertyDataFacilitiesComponent;
  let fixture: ComponentFixture<PropertyDataFacilitiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PropertyDataFacilitiesComponent]
    });
    fixture = TestBed.createComponent(PropertyDataFacilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
