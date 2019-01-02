import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { NgForm, FormControl } from '@angular/forms';

import { ProjectManagerService } from '../shared/project-manager-service';

@Component({
  selector: ' pm-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
    userList: any = [];
    user: any = {};
    searchText: string;
    isAdd: boolean;
    inputParam: any;
    techError: boolean = false;
    screenLoader: boolean;
    order: number = 1;  
    fieldName: string = '';

    @ViewChild('addUserForm') addUserForm: NgForm;

    constructor(public projectManagerService: ProjectManagerService, public router: Router) {
    }

    ngOnInit() {
        this.screenLoader = true;
        this.isAdd = true;
        this.getUserDetails();        
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

    addUser(usr: any) {
        this.screenLoader = true;
        this.inputParam = {
            "action" : this.isAdd ? 'ADD' : 'EDIT',
            "userVO" : {
                "userId" : this.isAdd ? 0 : usr.userId,
                "fname" : usr.fname,
                "lname" : usr.lname,
                "empId" : usr.empId
            }
        };

        this.projectManagerService.modifyUser(this.inputParam).subscribe(
            (data: any) => {
                if(null != data && undefined != data && null !== data.status && undefined !== data.status && 'Success' === data.status) {
                    this.getUserDetails();
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
        this.user = {};
        this.reset();
        this.router.navigate(['/']);
    }

    editUser(usr : any) {
        this.user = usr;
        this.isAdd = false;
    }

    deleteUser(usr : any) {
        this.screenLoader = true;
        this.inputParam = {
            "action" : "DELETE",
            "userVO" : usr
        };

        this.projectManagerService.modifyUser(this.inputParam).subscribe(
            (data: any) => {
                if(null != data && undefined != data && null !== data.status && undefined !== data.status && 'Success' === data.status) {
                    this.getUserDetails();
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
        this.user = {};
        this.reset();
        this.router.navigate(['/']);
    }

    reset() {
        this.user = {};
        this.isAdd = true;
        this.searchText = '';
        this.inputParam = {};
        this.techError = false;
        this.addUserForm.controls['fname'].markAsPristine();
        this.addUserForm.controls['fname'].markAsUntouched();
        this.addUserForm.controls['lname'].markAsPristine();
        this.addUserForm.controls['lname'].markAsUntouched();
        this.addUserForm.controls['empId'].markAsPristine();
        this.addUserForm.controls['empId'].markAsUntouched();
    }

    sortUser(prop: string) {
        this.order = this.order * (-1);
        let order_val = this.order == 1 ? 'asc' : 'desc';
        this.fieldName = prop + "-" + order_val;
        return false;
    }
}
