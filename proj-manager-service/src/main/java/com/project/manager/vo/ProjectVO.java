package com.project.manager.vo;

public class ProjectVO {
	
	private int projectId;
	
	private String project;
	
	private String startDate;
	
	private String endDate;
	
	private int priority;

	private int empId;
	
	private int noOfTask;
	
	private int noOfCompletedTask;

	public int getProjectId() {
		return projectId;
	}

	public void setProjectId(int projectId) {
		this.projectId = projectId;
	}

	public String getProject() {
		return project;
	}

	public void setProject(String project) {
		this.project = project;
	}

	public String getStartDate() {
		return startDate;
	}

	public void setStartDate(String startDate) {
		this.startDate = startDate;
	}

	public String getEndDate() {
		return endDate;
	}

	public void setEndDate(String endDate) {
		this.endDate = endDate;
	}

	public int getPriority() {
		return priority;
	}

	public void setPriority(int priority) {
		this.priority = priority;
	}

	public int getEmpId() {
		return empId;
	}

	public void setEmpId(int empId) {
		this.empId = empId;
	}

	public int getNoOfTask() {
		return noOfTask;
	}

	public void setNoOfTask(int noOfTask) {
		this.noOfTask = noOfTask;
	}

	public int getNoOfCompletedTask() {
		return noOfCompletedTask;
	}

	public void setNoOfCompletedTask(int noOfCompletedTask) {
		this.noOfCompletedTask = noOfCompletedTask;
	}
	
}
