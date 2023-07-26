import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-password-indicator',
  templateUrl: './password-indicator.component.html',
  styleUrls: ['./password-indicator.component.scss'],
})
export class PasswordIndicatorComponent {
  @Input() passwordStrength: number = 0;
  textIndicator: string = 'Empty';
  ngOnChanges(changes: SimpleChanges) {
    if ('passwordStrength' in changes) {
      this.updateTextIndicator();
    }
  }

  private updateTextIndicator() {
    switch (this.passwordStrength) {
      case 0:
        this.textIndicator = 'Empty';
        break;
      case -1:
        this.textIndicator = 'Less than 8 symbols';
        break;
      case 1:
        this.textIndicator = 'Low';
        break;
      case 2:
        this.textIndicator = 'Medium';
        break;
      default:
        this.textIndicator = 'Strong';
        break;
    }
  }
}
