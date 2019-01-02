import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TaskRoutingModule } from './task-routing.module';
import { TaskComponent } from './task.component';
import { AddTaskModule } from './addtask/addtask.module';
import { EditTaskModule } from './edittask/edittask.module';

@NgModule({
  imports: [CommonModule, FormsModule, TaskRoutingModule, AddTaskModule, EditTaskModule],
  declarations: [TaskComponent],
  exports: [TaskComponent]
})
export class TaskModule { }
