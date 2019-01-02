/**
 * ProjectManagerService.java
 *
 * Modification History
 *
 * Date        Version   Developer      Description
 * ---------   -------   ------------   --------------------------------------
 * 11/23/2018   1.0	 	 Cognizant		Initial version
 */
package com.project.manager.service;

import com.project.manager.exception.ProjectManagerException;
import com.project.manager.request.GetParentTaskRequest;
import com.project.manager.request.GetProjectRequest;
import com.project.manager.request.GetTaskRequest;
import com.project.manager.request.GetUserRequest;
import com.project.manager.response.GetParentTaskResponse;
import com.project.manager.response.GetProjectResponse;
import com.project.manager.response.GetTaskResponse;
import com.project.manager.response.GetUserResponse;

public interface ProjectManagerService {
	
	public GetTaskResponse viewTask(int projectId) throws ProjectManagerException;
	
	public GetParentTaskResponse getParentTask() throws ProjectManagerException;
	
	public GetProjectResponse getProject() throws ProjectManagerException;

	public GetUserResponse getUser() throws ProjectManagerException;
	
	public String updateTask(GetTaskRequest request) throws ProjectManagerException;
	
	public String updateParentTask(GetParentTaskRequest request) throws ProjectManagerException;
	
	public String updateProject(GetProjectRequest request) throws ProjectManagerException;
	
	public String updateUser(GetUserRequest request) throws ProjectManagerException;
	
}
