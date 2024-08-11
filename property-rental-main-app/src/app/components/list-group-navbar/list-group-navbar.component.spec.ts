import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGroupNavbarComponent } from './list-group-navbar.component';

describe('ListGroupNavbarComponent', () => {
  let component: ListGroupNavbarComponent;
  let fixture: ComponentFixture<ListGroupNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListGroupNavbarComponent]
    });
    fixture = TestBed.createComponent(ListGroupNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
