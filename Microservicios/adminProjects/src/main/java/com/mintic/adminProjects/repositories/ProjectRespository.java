package com.mintic.adminProjects.repositories;

import com.mintic.adminProjects.entities.ProjectEntity;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ProjectRespository extends MongoRepository<ProjectEntity, ObjectId> {

}
