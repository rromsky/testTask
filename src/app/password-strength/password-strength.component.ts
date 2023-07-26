import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password-strength',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.scss'],
})
export class PasswordStrengthComponent implements OnInit {
  textIndicator: string = 'Empty';
  password: string = '';
  passwordStrength: number = 0;
  visiblePassword: boolean = false;
  ngOnInit(): void {}

  checkPasswordStrength(): void {
    this.passwordStrength = 0;
    if (this.password.length === 0) {
      this.passwordStrength = 0;
      this.textIndicator = 'Empty';
      return;
    } else if (this.password.length <= 8) {
      this.passwordStrength = -1;
      this.textIndicator = 'Less then 8 symbols';
      return;
    }
    if (/^(?=.*[0-9])/.test(this.password)) {
      this.passwordStrength++;
    }
    if (/^(?=.*[a-zA-Z])/.test(this.password)) {
      this.passwordStrength++;
    }
    if (/^(?=.*[!@#$%^&*(),.?":{}|<>+=_])/.test(this.password)) {
      this.passwordStrength++;
    }
    switch (this.passwordStrength) {
      case 1:
        this.textIndicator = 'Poor';
        break;
      case 2:
        this.textIndicator = 'Medium';
        break;
      case 3:
        this.textIndicator = 'Strong';
        break;
    }
  }
  changeVisible(): void {
    this.visiblePassword = !this.visiblePassword;
    console.log(this.visiblePassword);
  }
}
