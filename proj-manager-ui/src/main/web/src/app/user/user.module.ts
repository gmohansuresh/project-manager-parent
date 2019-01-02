import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UserComponent } from './user.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [UserComponent],
  exports: [UserComponent]
})
export class UserModule { }
