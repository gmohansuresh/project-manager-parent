import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaskComponent } from './task/task.component';
import { AddTaskComponent } from './task/addtask/addtask.component';
import { EditTaskComponent } from './task/edittask/edittask.component';
import { ProjectComponent } from './project/project.component';
import { UserComponent } from './user/user.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: '/addUser', pathMatch: 'full' },
      { path: 'addUser', component: UserComponent },
      { path: 'addProject', component: ProjectComponent },
      { path: 'viewTask', component: TaskComponent  },
      { path: 'addTask', component: AddTaskComponent  },
      { path: 'editTask', component: EditTaskComponent }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
