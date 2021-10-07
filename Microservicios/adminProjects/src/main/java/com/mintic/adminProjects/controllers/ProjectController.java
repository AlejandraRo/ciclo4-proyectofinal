package com.mintic.adminProjects.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.mintic.adminProjects.entities.ProjectEntity;
import com.mintic.adminProjects.repositories.ProjectRespository;

@RestController
public class ProjectController {

  private final ProjectRespository projectRepository;
	
	public ProjectController(ProjectRespository projectRepository) {
		this.projectRepository = projectRepository;
	}
	
	//GET PROJECT BY NAME
	@GetMapping("/proyectos/{name}")
	public ProjectEntity getProjectByName(@PathVariable String name) {
		return projectRepository.findProjectByName(name);
	}

}
