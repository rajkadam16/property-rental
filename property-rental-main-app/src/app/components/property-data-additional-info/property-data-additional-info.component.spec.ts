import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyDataAdditionalInfoComponent } from './property-data-additional-info.component';

describe('PropertyDataAdditionalInfoComponent', () => {
  let component: PropertyDataAdditionalInfoComponent;
  let fixture: ComponentFixture<PropertyDataAdditionalInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PropertyDataAdditionalInfoComponent]
    });
    fixture = TestBed.createComponent(PropertyDataAdditionalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
