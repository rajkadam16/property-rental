import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyMediaViewerComponent } from './property-media-viewer.component';

describe('PropertyMediaViewerComponent', () => {
  let component: PropertyMediaViewerComponent;
  let fixture: ComponentFixture<PropertyMediaViewerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PropertyMediaViewerComponent]
    });
    fixture = TestBed.createComponent(PropertyMediaViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
