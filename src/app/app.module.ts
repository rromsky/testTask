import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule

import { AppComponent } from './app.component';
import { PasswordStrengthComponent } from './password-strength/password-strength.component'; // Import your PasswordStrengthComponent

@NgModule({
  declarations: [AppComponent, PasswordStrengthComponent],
  imports: [BrowserModule, FormsModule], // Add FormsModule to the imports
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
