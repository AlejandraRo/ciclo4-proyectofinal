package com.mintic.adminProjects.repositories;

import com.mintic.adminProjects.entities.ProjectEntity;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProjectRepository extends MongoRepository<ProjectEntity, String> {
  public ProjectEntity findProjectByName(String name);
}
