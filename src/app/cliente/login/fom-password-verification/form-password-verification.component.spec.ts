import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPasswordVerificationComponent } from './form-password-verification.component';

describe('FormPasswordVerificationComponent', () => {
  let component: FormPasswordVerificationComponent;
  let fixture: ComponentFixture<FormPasswordVerificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPasswordVerificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPasswordVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
