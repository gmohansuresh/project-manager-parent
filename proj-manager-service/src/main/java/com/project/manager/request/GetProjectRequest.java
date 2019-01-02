package com.project.manager.request;

import com.project.manager.vo.ProjectVO;

public class GetProjectRequest {
	
	private ProjectVO projectVO;

	private String action;

	public ProjectVO getProjectVO() {
		return projectVO;
	}

	public void setProjectVO(ProjectVO projectVO) {
		this.projectVO = projectVO;
	}

	public String getAction() {
		return action;
	}

	public void setAction(String action) {
		this.action = action;
	}
	
}
