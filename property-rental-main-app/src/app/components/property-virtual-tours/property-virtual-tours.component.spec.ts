import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyVirtualToursComponent } from './property-virtual-tours.component';

describe('PropertyVirtualToursComponent', () => {
  let component: PropertyVirtualToursComponent;
  let fixture: ComponentFixture<PropertyVirtualToursComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PropertyVirtualToursComponent]
    });
    fixture = TestBed.createComponent(PropertyVirtualToursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
