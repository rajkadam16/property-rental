import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestboxComponent } from './requestbox.component';

describe('RequestboxComponent', () => {
  let component: RequestboxComponent;
  let fixture: ComponentFixture<RequestboxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequestboxComponent]
    });
    fixture = TestBed.createComponent(RequestboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
