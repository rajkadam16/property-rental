import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPropertyCardsComponent } from './show-property-cards.component';

describe('ShowPropertyCardsComponent', () => {
  let component: ShowPropertyCardsComponent;
  let fixture: ComponentFixture<ShowPropertyCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowPropertyCardsComponent]
    });
    fixture = TestBed.createComponent(ShowPropertyCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
