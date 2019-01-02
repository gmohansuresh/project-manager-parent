package com.project.manager.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.project.manager.entity.ParentTaskEnt;

@Repository
@Transactional
public interface ParentTaskRepository extends JpaRepository<ParentTaskEnt, Integer> {
	
	@Query("from ParentTaskEnt pTask where pTask.parentId=(:parentId)")
	ParentTaskEnt findByParentTaskId(@Param("parentId") int parentId);
	
	@Modifying
	@Query(value = "DELETE FROM PARENT_TASK where project_id=(:projectId)", nativeQuery = true)
    void deleteByProjectId(@Param("projectId") int projectId);
}
