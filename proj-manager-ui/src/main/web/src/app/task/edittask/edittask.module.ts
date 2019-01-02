import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditTaskComponent } from './edittask.component';

@NgModule({
  imports: [CommonModule],
  declarations: [EditTaskComponent],
  exports: [EditTaskComponent]
})
export class EditTaskModule { }
