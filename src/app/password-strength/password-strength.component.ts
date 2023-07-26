import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password-strength',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.scss'],
})
export class PasswordStrengthComponent implements OnInit {
  password: string = '';
  passwordStrength: number = 0;
  ngOnInit(): void {}

  checkPasswordStrength(): void {
    this.passwordStrength = 0;
    if (this.password.length === 0) {
      this.passwordStrength = 0;
      return;
    } else if (this.password.length < 8) {
      this.passwordStrength = -1;
      return;
    }
    if (/^(?=.*[0-9])/.test(this.password)) {
      this.passwordStrength++;
    }
    if (/^(?=.*[a-zA-Z])/.test(this.password)) {
      this.passwordStrength++;
    }
    if (/^(?=.*[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/@#\\])/.test(this.password)) {
      this.passwordStrength++;
    }
  }
}
