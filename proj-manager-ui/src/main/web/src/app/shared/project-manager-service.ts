import { Injectable } from '@angular/core';
//import { Observable } from 'rxjs';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RouterModule , Router } from '@angular/router';
import { Config } from './config/env.config';

@Injectable()
export class ProjectManagerService {
  
  task: any = {};
  parentTask: any = {};
  
  constructor(private http: Http, private router : Router, private httpClient: HttpClient) {}

    getUser() {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept':'*/*'
      });
      return this.httpClient.get(Config.API+'getUser', {headers: headers});
    }

    getProject() {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json'
      });
      return this.httpClient.get(Config.API+'getProject', {headers: headers});
    }

    getParentTask() {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json'
      });
      return this.httpClient.get(Config.API+'getParentTask', {headers: headers});
    }

    getTask(inputParam : {}) {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json'
      });
      return this.httpClient.post(Config.API+'viewTask', inputParam, {headers: headers});
    }

    modifyUser(inputParam : {}) {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json'
      });
      return this.httpClient.post(Config.API+'updateUser', inputParam, {headers: headers});
    }

    modifyProject(inputParam : {}) {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json'
      });
      return this.httpClient.post(Config.API+'updateProject', inputParam, {headers: headers});
    }

    modifyParentTask(inputParam : {}) {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json'
      });
      return this.httpClient.post(Config.API+'updateParentTask', inputParam, {headers: headers});
    }

    modifyTask(inputParam : {}) {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json'
      });
      return this.httpClient.post(Config.API+'updateTask', inputParam, {headers: headers});
    }
}