import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyDataComponent } from './property-data.component';

describe('PropertyDataComponent', () => {
  let component: PropertyDataComponent;
  let fixture: ComponentFixture<PropertyDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PropertyDataComponent]
    });
    fixture = TestBed.createComponent(PropertyDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
