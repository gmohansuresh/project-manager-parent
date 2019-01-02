package com.project.manager;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@EnableAutoConfiguration
public class ProjectManagerBootApplication {

	public static void main(String[] args) {
		SpringApplication.run(ProjectManagerBootApplication.class, args);
	}
	
}
