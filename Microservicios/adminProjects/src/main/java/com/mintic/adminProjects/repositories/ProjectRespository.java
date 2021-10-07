package com.mintic.adminProjects.repositories;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

import com.mintic.adminProjects.entities.ProjectEntity;

public interface ProjectRespository extends MongoRepository<ProjectEntity, ObjectId>{
	
	public ProjectEntity findProjectByName(String name);

}