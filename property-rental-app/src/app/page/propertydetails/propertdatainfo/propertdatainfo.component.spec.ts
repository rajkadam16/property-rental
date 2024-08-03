import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertdatainfoComponent } from './propertdatainfo.component';

describe('PropertdatainfoComponent', () => {
  let component: PropertdatainfoComponent;
  let fixture: ComponentFixture<PropertdatainfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PropertdatainfoComponent]
    });
    fixture = TestBed.createComponent(PropertdatainfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
