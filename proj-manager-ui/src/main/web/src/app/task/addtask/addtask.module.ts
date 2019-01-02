import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AddTaskComponent } from './addtask.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [AddTaskComponent],
  exports: [AddTaskComponent]
})
export class AddTaskModule { }
