package com.project.manager.request;

import com.project.manager.vo.TaskVO;

public class GetTaskRequest {
	
	private TaskVO taskVO;

	private String action;

	public TaskVO getTaskVO() {
		return taskVO;
	}

	public void setTaskVO(TaskVO taskVO) {
		this.taskVO = taskVO;
	}

	public String getAction() {
		return action;
	}

	public void setAction(String action) {
		this.action = action;
	}
	
}