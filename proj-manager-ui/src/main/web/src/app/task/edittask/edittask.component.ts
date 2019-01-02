import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { NgForm, FormControl } from '@angular/forms';
import { ProjectManagerService } from '../../shared/project-manager-service';
declare var jQuery:any;

@Component({
  selector: ' pm-edittask',
  templateUrl: './edittask.component.html',
  styleUrls: ['./edittask.component.css']
})
export class EditTaskComponent implements OnInit {
    task : any = {};
    userName: string = '';
    screenLoader: boolean;
    isError: boolean;
    errorMessage: string;
    techError: boolean;
    inputParam: any = {};
    startDt: any;
    endDt: any;
    minDate: Date = new Date();

    @ViewChild('updateTaskForm') updateTaskForm: NgForm;

    constructor (public projectManagerService: ProjectManagerService, public router: Router, private datepipe: DatePipe) {
      
    }

    ngOnInit() {
       this.task = this.projectManagerService.task;
       if(null !== this.task && undefined !== this.task && null !== this.task.userFName && undefined !== this.task.userFName) {
            this.userName = this.task.userLName + ", " + this.task.userFName;
       } else {
           this.userName = '';
           this.task.priority = 0;
       }
    }

    reset() {
        this.task = {};
        this.inputParam = {};
        this.techError = false;
        this.isError = false;
        this.errorMessage = '';
        this.userName = '';
        this.updateTaskForm.controls['taskName'].markAsPristine();
        this.updateTaskForm.controls['taskName'].markAsUntouched();
    }

    updateTask(task: any) {
        this.screenLoader = true;
        this.isError = false;
        if(!this.validateFields(task)) {            
            this.inputParam = {
                "taskVO" : {
                    "taskId" : task.taskId,
                    "task" : task.task,
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
            this.isError = false;            
        } else {
            this.screenLoader = false;
        }
    }

    validateFields(task: any) {
        this.isError = false;
        if(null !==task && undefined !== task) {
            if(null === task.task || undefined === task.task) {
                this.isError = true;
                this.errorMessage = 'Please enter Task name';
                return this.isError;
            } else if(undefined === task.isParentTask || !task.isParentTask) {
                this.startDt = new Date(task.startDate).getTime();
                this.endDt = new Date(task.endDate).getTime();
                if(this.startDt > this.endDt) {
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
}
