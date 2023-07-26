import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password-strength',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.scss'],
})
export class PasswordStrengthComponent {
  password_strength: number = 0;
  visible_password: boolean = false;
  receiveMessage(message: number) {
    this.password_strength = message;
  }
  receiveVisible(message: boolean) {
    this.visible_password = message;
  }
}
