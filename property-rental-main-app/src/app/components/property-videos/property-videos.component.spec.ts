import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyVideosComponent } from './property-videos.component';

describe('PropertyVideosComponent', () => {
  let component: PropertyVideosComponent;
  let fixture: ComponentFixture<PropertyVideosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PropertyVideosComponent]
    });
    fixture = TestBed.createComponent(PropertyVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
