import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-password-btn-toggle',
  templateUrl: './password-btn-toggle.component.html',
  styleUrls: ['./password-btn-toggle.component.scss'],
})
export class PasswordBtnToggleComponent {
  @Output() visibleState = new EventEmitter<boolean>();
  visiblePassword: boolean = false;
  sendMessage() {
    this.visibleState.emit(this.visiblePassword);
  }
  changeVisible(): void {
    this.visiblePassword = !this.visiblePassword;
    this.sendMessage();
  }
}
