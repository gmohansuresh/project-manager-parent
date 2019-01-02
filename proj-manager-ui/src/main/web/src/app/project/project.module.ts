import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProjectComponent } from './project.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [ProjectComponent],
  exports: [ProjectComponent]
})
export class ProjectModule { }
