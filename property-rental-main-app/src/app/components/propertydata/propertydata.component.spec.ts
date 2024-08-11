import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertydataComponent } from './propertydata.component';

describe('PropertydataComponent', () => {
  let component: PropertydataComponent;
  let fixture: ComponentFixture<PropertydataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PropertydataComponent]
    });
    fixture = TestBed.createComponent(PropertydataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
