import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { NgForm, FormControl } from '@angular/forms';
import { ProjectManagerService } from '../../shared/project-manager-service';
declare var jQuery:any;

@Component({
  selector: ' pm-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddTaskComponent implements OnInit {
    task: any = {};
    projectList: any = [];
    parentTaskList: any = [];
    userList: any = [];
    selectedProject: string;
    selectedParentTask: string;
    selectedUser: string;
    inputParam: any;
    techError: boolean = false;
    screenLoader: boolean;
    isError: boolean;
    errorMessage: string;
    startDt: any;
    endDt: any;
    minDate: Date = new Date();
    
    @ViewChild('addTaskForm') addTaskForm: NgForm;

    constructor (public projectManagerService: ProjectManagerService, public router: Router, private datepipe: DatePipe) {
      
    }

    ngOnInit() {
        this.isError = false;
        this.errorMessage = '';
        this.screenLoader = true;
        this.task.priority = 0;
        this.task.startDate = this.datepipe.transform(new Date(), 'yyyy-MM-dd');
        this.task.endDate = this.datepipe.transform(new Date().getTime() + (60*60*24*1000), 'yyyy-MM-dd');
        
        this.getUserDetails();
        this.getProjectDetails();
        this.getParentTaskDetails();
    }

    getUserDetails() {
        this.projectManagerService.getUser().subscribe(
          (data: any) => {
              if(null != data && undefined != data) {
                  this.userList = data.userVO;
                  this.screenLoader = false;
              } else {
                  this.screenLoader = false;
                  this.techError = true;
              }
          },
          (err: any) => {
              this.screenLoader = false;
              this.techError = true;
          }    
        );
    }

    getProjectDetails() {
        this.projectManagerService.getProject().subscribe(
          (data: any) => {
              if(null != data && undefined != data) {
                  this.projectList = data.projectVO;
                  this.screenLoader = false;
              } else {
                  this.screenLoader = false;
                  this.techError = true;
              }
          },
          (err: any) => {
              this.screenLoader = false;
              this.techError = true;
          }    
        );
    }

    getParentTaskDetails() {
        this.projectManagerService.getParentTask().subscribe(
          (data: any) => {
              if(null != data && undefined != data) {
                  this.parentTaskList = data.parentTaskVO;
                  this.screenLoader = false;
              } else {
                  this.screenLoader = false;
                  this.techError = true;
              }
          },
          (err: any) => {
              this.screenLoader = false;
              this.techError = true;
          }    
        );
    }

    addTask(task: any) {
        this.screenLoader = true;
        this.isError = false;
        if(!this.validateFields(task)) {
            if(task.isParentTask) {
                this.inputParam = {
                    "action" : "ADD",
                    "parentTaskVO" : {
                        "parentTaskName" : task.taskName,
                        "projectId" : this.task.projectId
                    }
                };
                this.projectManagerService.modifyParentTask(this.inputParam).subscribe(
                    (data: any) => {
                        if(null != data && undefined != data && null !== data.status && undefined !== data.status && 'Success' === data.status) {
                            this.reset();
                            this.getUserDetails();
                            this.getProjectDetails();
                            this.getParentTaskDetails();
                            this.screenLoader = false;
                        } else {
                            this.screenLoader = false;
                            this.techError = true;
                        }
                    },
                    (err: any) => {
                        this.screenLoader = false;
                        this.techError = true;
                    }    
                );               
            } else {
                this.inputParam = {
                    "taskVO" : {
                        "task" : task.taskName,
                        "parentId" : this.task.parentTaskId,
                        "projectId" : this.task.projectId,
                        "priority" : this.task.priority,
                        "startDate" : this.datepipe.transform(this.task.startDate, 'yyyy-MM-dd'),
                        "endDate" : this.datepipe.transform(this.task.endDate, 'yyyy-MM-dd'),
                        "status" : "NEW"
                    }
                };
                this.projectManagerService.modifyTask(this.inputParam).subscribe(
                    (data: any) => {
                        if(null != data && undefined != data && null !== data.status && undefined !== data.status && 'Success' === data.status) {
                            this.reset();
                            this.getUserDetails();
                            this.getProjectDetails();
                            this.getParentTaskDetails();
                            this.screenLoader = false;
                        } else {
                            this.screenLoader = false;
                            this.techError = true;
                        }
                    },
                    (err: any) => {
                        this.screenLoader = false;
                        this.techError = true;
                    }    
                );
            }
            this.router.navigate(['/addTask']);
        } else {
            this.screenLoader = false;
        }
    }

    validateFields(task: any) {
        this.isError = false;
        if(null !==task && undefined !== task) {
            if(null === task.projectName || undefined === task.projectName) {
                this.isError = true;
                this.errorMessage = 'Please select Project';
                return this.isError;
            } else if(null === task.taskName || undefined === task.taskName) {
                this.isError = true;
                this.errorMessage = 'Please enter Task name';
                return this.isError;
            } else if(undefined === task.isParentTask || !task.isParentTask) {
                this.startDt = new Date(task.startDate);
                this.endDt = new Date(task.endDate);
                if(null === task.userName || undefined === task.userName) {
                    this.isError = true;
                    this.errorMessage = 'Please select User';
                    return this.isError;
                } else if(this.startDt > this.endDt) {
                    this.isError = true;
                    this.errorMessage = 'End date cannot be greater than Start date';
                    return this.isError;
                }
            } else {
                this.isError = false;
                return this.isError;
            }
        }
    }

    reset() {
        this.task = {};
        this.selectedProject = '';
        this.selectedParentTask = '';
        this.selectedUser = '';
        this.inputParam = {};
        this.techError = false;
        this.isError = false;
        this.errorMessage = '';
        this.addTaskForm.controls['taskName'].markAsPristine();
        this.addTaskForm.controls['taskName'].markAsUntouched();
    }

    getProject() {
        jQuery("#searchProjectPopupOpener").click();
    }
    
    getParentTask() {
        jQuery("#searchParentTaskPopupOpener").click();
    }

    getUser() {
        jQuery("#searchUserPopupOpener").click();
    }

    setUser(usr: any) {
        this.task.userName = usr.lname + ', ' + usr.fname;
        this.task.userId = usr.userId;
        jQuery('#searchUserModalWindow').modal("hide");
    }

    setParentTask(pTask: any) {
        this.task.parentTaskName = pTask.parentTaskName;
        this.task.parentTaskId = pTask.parentId;
        jQuery('#searchParentTaskModalWindow').modal("hide");
    }

    setProject(proj: any) {
        this.task.projectName = proj.project;
        this.task.projectId = proj.projectId;
        jQuery('#searchProjectModalWindow').modal("hide");
    }
}
