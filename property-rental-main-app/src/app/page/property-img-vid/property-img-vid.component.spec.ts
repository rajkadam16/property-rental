import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyImgVidComponent } from './property-img-vid.component';

describe('PropertyImgVidComponent', () => {
  let component: PropertyImgVidComponent;
  let fixture: ComponentFixture<PropertyImgVidComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PropertyImgVidComponent]
    });
    fixture = TestBed.createComponent(PropertyImgVidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
