package com.project.manager.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name="task")
public class TaskEnt {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="task_id")
	private int taskId;
	
	@ManyToOne
	@JoinColumn(name = "parent_id")
	private ParentTaskEnt parentTaskEnt;
	
	@ManyToOne
	@JoinColumn(name = "project_id")
	private ProjectEnt projectEnt;
	
	private String task;
	
	@Temporal(TemporalType.DATE)
	@Column(name="start_date")
	private Date startDate;
	
	@Temporal(TemporalType.DATE)
	@Column(name="end_date")
	private Date endDate;
	
	private int priority;
	
	private String status;

	public int getTaskId() {
		return taskId;
	}

	public void setTaskId(int taskId) {
		this.taskId = taskId;
	}

	public ParentTaskEnt getParentTaskEnt() {
		return parentTaskEnt;
	}

	public void setParentTaskEnt(ParentTaskEnt parentTaskEnt) {
		this.parentTaskEnt = parentTaskEnt;
	}

	public ProjectEnt getProjectEnt() {
		return projectEnt;
	}

	public void setProjectEnt(ProjectEnt projectEnt) {
		this.projectEnt = projectEnt;
	}

	public String getTask() {
		return task;
	}

	public void setTask(String task) {
		this.task = task;
	}

	public Date getStartDate() {
		return startDate;
	}

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	public Date getEndDate() {
		return endDate;
	}

	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}

	public int getPriority() {
		return priority;
	}

	public void setPriority(int priority) {
		this.priority = priority;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

}
