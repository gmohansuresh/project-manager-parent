package com.project.manager.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.project.manager.entity.UserEnt;

@Repository
@Transactional
public interface UserRepository extends JpaRepository<UserEnt, Integer> {
	
	@Query("from UserEnt usr where usr.userId=(:userId)")
	UserEnt findByUserId(@Param("userId") int userId);
}
