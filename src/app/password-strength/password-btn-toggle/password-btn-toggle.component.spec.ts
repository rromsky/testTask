import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordBtnToggleComponent } from './password-btn-toggle.component';

describe('PasswordBtnToggleComponent', () => {
  let component: PasswordBtnToggleComponent;
  let fixture: ComponentFixture<PasswordBtnToggleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PasswordBtnToggleComponent]
    });
    fixture = TestBed.createComponent(PasswordBtnToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
