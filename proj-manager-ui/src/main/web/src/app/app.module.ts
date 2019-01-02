import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { DatePipe } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TaskModule } from './task/task.module';
import { TaskComponent } from './task/task.component';
import { AddTaskComponent } from './task/addtask/addtask.component';
import { EditTaskComponent } from './task/edittask/edittask.component';
import { ProjectManagerService } from './shared/project-manager-service';
import { ProjectComponent } from './project/project.component';
import { UserComponent } from './user/user.component';
import { SortFilterPipe } from './shared/sort-pipe';
import { SearchFilter } from './shared/search-filter';
import { ScreenFreezeComponent } from './shared/screenfreeze/screenfreeze.component';

@NgModule({
  imports: [BrowserModule, HttpModule, HttpClientModule, FormsModule, AppRoutingModule],
  declarations: [AppComponent, TaskComponent, AddTaskComponent, EditTaskComponent, ProjectComponent, UserComponent, ScreenFreezeComponent, SortFilterPipe, SearchFilter],
  providers: [ProjectManagerService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
