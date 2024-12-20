import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactPropertyComponent } from './contact-property.component';

describe('ContactPropertyComponent', () => {
  let component: ContactPropertyComponent;
  let fixture: ComponentFixture<ContactPropertyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactPropertyComponent]
    });
    fixture = TestBed.createComponent(ContactPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
