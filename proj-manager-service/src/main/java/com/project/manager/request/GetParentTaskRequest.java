package com.project.manager.request;

import com.project.manager.vo.ParentTaskVO;

public class GetParentTaskRequest {
	
	private ParentTaskVO parentTaskVO;

	private String action;

	public ParentTaskVO getParentTaskVO() {
		return parentTaskVO;
	}

	public void setParentTaskVO(ParentTaskVO parentTaskVO) {
		this.parentTaskVO = parentTaskVO;
	}

	public String getAction() {
		return action;
	}

	public void setAction(String action) {
		this.action = action;
	}

}