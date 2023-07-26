import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PasswordStrengthComponent } from './password-strength/password-strength.component';
import { PasswordInputComponent } from './password-strength/password-input/password-input.component';
import { PasswordBtnToggleComponent } from './password-strength/password-btn-toggle/password-btn-toggle.component';
import { PasswordIndicatorComponent } from './password-strength/password-indicator/password-indicator.component';

@NgModule({
  declarations: [
    AppComponent,
    PasswordStrengthComponent,
    PasswordInputComponent,
    PasswordBtnToggleComponent,
    PasswordIndicatorComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
