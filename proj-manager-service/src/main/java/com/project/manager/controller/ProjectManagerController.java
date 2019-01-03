package com.project.manager.controller;


import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.project.manager.constants.ProjectManagerConstants;
import com.project.manager.exception.ProjectManagerException;
import com.project.manager.request.GetParentTaskRequest;
import com.project.manager.request.GetProjectRequest;
import com.project.manager.request.GetTaskRequest;
import com.project.manager.request.GetUserRequest;
import com.project.manager.response.GetParentTaskResponse;
import com.project.manager.response.GetProjectResponse;
import com.project.manager.response.GetTaskResponse;
import com.project.manager.response.GetUserResponse;
import com.project.manager.service.ProjectManagerService;

@CrossOrigin(origins = "*", allowedHeaders="*")
@RestController
public class ProjectManagerController implements ProjectManagerConstants {

	private final Logger logger = LoggerFactory.getLogger(this.getClass());
	
	@Autowired
	private ProjectManagerService projectManagerService;
	
	@RequestMapping(value = "/viewTask", method = RequestMethod.POST, headers = "Accept=*/*", consumes = {
			"application/json; charset=UTF-8"}, produces = {"application/json; charset=UTF-8"})
	public @ResponseBody GetTaskResponse viewTaskDetails(@RequestBody @Valid GetTaskRequest request) throws ProjectManagerException {
		GetTaskResponse getTaskResponse = new GetTaskResponse();
		try {
			getTaskResponse = projectManagerService.viewTask(request.getTaskVO().getProjectId());
		} catch(ProjectManagerException e) {
			logger.error("Error - ProjectManagerController viewTask : "+ e);
			throw new ProjectManagerException(e.getErrorCode(), e.getErrorMessage(), e.getStatus());
		}
		return getTaskResponse;
	}
	
	@RequestMapping(value = "/getParentTask", method = RequestMethod.GET, headers = "Accept=*/*", produces = {"application/json; charset=UTF-8"})
	public @ResponseBody GetParentTaskResponse getParentTaskdetails() throws ProjectManagerException {
		GetParentTaskResponse getParentTaskResponse = new GetParentTaskResponse();
		try {
			getParentTaskResponse = projectManagerService.getParentTask();
		} catch(ProjectManagerException e) {
			logger.error("Error - ProjectManagerController getParentTask : "+ e);
			throw new ProjectManagerException(e.getErrorCode(), e.getErrorMessage(), e.getStatus());
		}
		return getParentTaskResponse;
	}

	@RequestMapping(value = "/getProject", method = RequestMethod.GET, headers = "Accept=*/*", produces = {"application/json; charset=UTF-8"})
	public @ResponseBody GetProjectResponse getProjectdetails() throws ProjectManagerException {
		GetProjectResponse getProjectResponse = new GetProjectResponse();
		try {
			getProjectResponse = projectManagerService.getProject();
		} catch(ProjectManagerException e) {
			logger.error("Error - ProjectManagerController getProject : "+ e);
			throw new ProjectManagerException(e.getErrorCode(), e.getErrorMessage(), e.getStatus());
		}
		return getProjectResponse;
	}
	
	@RequestMapping(value = "/getUser", method = RequestMethod.GET, headers = "Accept=*/*", produces = {"application/json; charset=UTF-8"})
	public @ResponseBody GetUserResponse getUser() throws ProjectManagerException {
		GetUserResponse getUserResponse = new GetUserResponse();
		try {
			getUserResponse = projectManagerService.getUser();
		} catch(ProjectManagerException e) {
			logger.error("Error - ProjectManagerController getUser : "+ e);
			throw new ProjectManagerException(e.getErrorCode(), e.getErrorMessage(), e.getStatus());
		}
		return getUserResponse;
	}
	
	@RequestMapping(value = "/updateTask", method = RequestMethod.POST, headers = "Accept=*/*", consumes = {
			"application/json; charset=UTF-8"}, produces = {"application/json; charset=UTF-8"})
	public @ResponseBody GetTaskResponse updateTask(@RequestBody @Valid GetTaskRequest request) throws ProjectManagerException {
		GetTaskResponse getTaskResponse = new GetTaskResponse();
		String status = EMPTY;
		try {
			status = projectManagerService.updateTask(request);
			getTaskResponse.setStatus(status);
		} catch(ProjectManagerException e) {
			logger.error("Error - ProjectManagerController updateTask : "+ e);
			throw new ProjectManagerException(e.getErrorCode(), e.getErrorMessage(), e.getStatus());
		}
		return getTaskResponse;
	}
	
	@RequestMapping(value = "/updateParentTask", method = RequestMethod.POST, headers = "Accept=*/*", consumes = {
			"application/json; charset=UTF-8"}, produces = {"application/json; charset=UTF-8"})
	public @ResponseBody GetParentTaskResponse updateParentTask(@RequestBody @Valid GetParentTaskRequest request) throws ProjectManagerException {
		GetParentTaskResponse getParentTaskResponse = new GetParentTaskResponse();
		String status = EMPTY;
		try {
			status = projectManagerService.updateParentTask(request);
			getParentTaskResponse.setStatus(status);
		} catch(ProjectManagerException e) {
			logger.error("Error - ProjectManagerController updateParentTask : "+ e);
			throw new ProjectManagerException(e.getErrorCode(), e.getErrorMessage(), e.getStatus());
		}
		return getParentTaskResponse;
	}
	
	@RequestMapping(value = "/updateProject", method = RequestMethod.POST, headers = "Accept=*/*", consumes = {
			"application/json; charset=UTF-8"}, produces = {"application/json; charset=UTF-8"})
	public @ResponseBody GetProjectResponse updateProject(@RequestBody @Valid GetProjectRequest request) throws ProjectManagerException {
		GetProjectResponse getProjectResponse = new GetProjectResponse();
		String status = EMPTY;
		try {
			status = projectManagerService.updateProject(request);
			getProjectResponse.setStatus(status);
		} catch(ProjectManagerException e) {
			logger.error("Error - ProjectManagerController updateProject : "+ e);
			throw new ProjectManagerException(e.getErrorCode(), e.getErrorMessage(), e.getStatus());
		}
		return getProjectResponse;
	}
	
	@RequestMapping(value = "/updateUser", method = RequestMethod.POST, headers = "Accept=*/*", consumes = {
			"application/json; charset=UTF-8"}, produces = {"application/json; charset=UTF-8"})
	public @ResponseBody GetUserResponse updateUser(@RequestBody @Valid GetUserRequest request) throws ProjectManagerException {
		GetUserResponse getUserResponse = new GetUserResponse();
		String status = EMPTY;
		try {
			status = projectManagerService.updateUser(request);
			getUserResponse.setStatus(status);
		} catch(ProjectManagerException e) {
			logger.error("Error - ProjectManagerController updateUser : "+ e);
			throw new ProjectManagerException(e.getErrorCode(), e.getErrorMessage(), e.getStatus());
		}
		return getUserResponse;
	}
}