import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupFormBusinessComponent } from './signup-form-business.component';

describe('SignupFormBusinessComponent', () => {
  let component: SignupFormBusinessComponent;
  let fixture: ComponentFixture<SignupFormBusinessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupFormBusinessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupFormBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
