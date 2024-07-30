import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertydetailsComponent } from './propertydetails.component';

describe('PropertydetailsComponent', () => {
  let component: PropertydetailsComponent;
  let fixture: ComponentFixture<PropertydetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PropertydetailsComponent]
    });
    fixture = TestBed.createComponent(PropertydetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
