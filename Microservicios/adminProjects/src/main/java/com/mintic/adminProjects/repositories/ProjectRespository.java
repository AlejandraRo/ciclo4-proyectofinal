package com.mintic.adminProjects.repositories;

import com.mintic.adminProjects.entities.ProjectEntity;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProjectRespository extends MongoRepository<ProjectEntity, String> {

}
