package com.mintic.adminProjects.repositories;

import com.mintic.adminProjects.models.ProjectEntity;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface ProjectRepository extends MongoRepository<ProjectEntity,String> {
    List<ProjectEntity> findByIdUser (String IdUser);
}
