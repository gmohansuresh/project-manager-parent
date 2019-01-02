package com.project.manager.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="parent_task")
public class ParentTaskEnt {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="parent_id")
	private int parentId;
	
	@Column(name="parent_task")
	private String parentTask;
	
	@ManyToOne
	@JoinColumn(name = "project_id")
	private ProjectEnt projectEnt;

	public int getParentId() {
		return parentId;
	}

	public void setParentId(int parentId) {
		this.parentId = parentId;
	}

	public String getParentTask() {
		return parentTask;
	}

	public void setParentTask(String parentTask) {
		this.parentTask = parentTask;
	}

	public ProjectEnt getProjectEnt() {
		return projectEnt;
	}

	public void setProjectEnt(ProjectEnt projectEnt) {
		this.projectEnt = projectEnt;
	}

}
