import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingFormCComponent } from './booking-form-c.component';

describe('BookingFormCComponent', () => {
  let component: BookingFormCComponent;
  let fixture: ComponentFixture<BookingFormCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingFormCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingFormCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
