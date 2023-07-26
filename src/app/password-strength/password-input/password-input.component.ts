import { Component, EventEmitter, Output, Input } from '@angular/core';
import { empty } from 'rxjs';

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.scss'],
})
export class PasswordInputComponent {
  @Input() visiblePassword: boolean = false;
  @Output() messageEvent = new EventEmitter<number>();
  password: string = '';
  passwordStrength: number = 0;
  sendMessage() {
    this.messageEvent.emit(this.passwordStrength);
  }
  checkPasswordStrength(): void {
    this.passwordStrength = 0;
    if (this.password.length === 0) {
      this.passwordStrength = 0;
      this.sendMessage();
      return;
    } else if (this.password.length <= 8) {
      this.passwordStrength = -1;
      this.sendMessage();
      return;
    }
    if (/^(?=.*[0-9])/.test(this.password)) {
      this.passwordStrength++;
    }
    if (/^(?=.*[a-zA-Z])/.test(this.password)) {
      this.passwordStrength++;
    }
    if (/^(?=.*[!@#$%^&*(),.?":{}|<>+=_\[\]\-\/\\№;'])/.test(this.password)) {
      this.passwordStrength++;
    }
    this.sendMessage();
  }
}
