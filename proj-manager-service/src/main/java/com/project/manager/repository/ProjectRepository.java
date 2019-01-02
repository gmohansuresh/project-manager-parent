package com.project.manager.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.project.manager.entity.ProjectEnt;

@Repository
@Transactional
public interface ProjectRepository extends JpaRepository<ProjectEnt, Integer> {

	@Query("from ProjectEnt proj where proj.projectId=(:projectId)")
    ProjectEnt findByProjectId(@Param("projectId") int projectId);
	
	@Query("from ProjectEnt proj where proj.userEnt.userId=(:userId)")
    ProjectEnt findByUserId(@Param("userId") int userId);
	
	@Modifying
	@Query(value = "DELETE FROM PROJECT where user_id=(:userId)", nativeQuery = true)
    void deleteByUserId(@Param("userId") int userId);
}
