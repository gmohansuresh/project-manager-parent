import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaskComponent } from './task.component';
import { AddTaskComponent } from './addtask/addtask.component';
import { EditTaskComponent } from './edittask/edittask.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'viewTask', component: TaskComponent  },
      { path: 'addTask', component: AddTaskComponent  },
      { path: 'editTask', component: EditTaskComponent }
    ])
  ],
  exports: [RouterModule]
})
export class TaskRoutingModule { }
