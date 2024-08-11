import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestTourformComponent } from './request-tourform.component';

describe('RequestTourformComponent', () => {
  let component: RequestTourformComponent;
  let fixture: ComponentFixture<RequestTourformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequestTourformComponent]
    });
    fixture = TestBed.createComponent(RequestTourformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
