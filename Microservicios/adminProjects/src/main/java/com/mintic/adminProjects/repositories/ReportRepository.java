package com.mintic.adminProjects.repositories;

import com.mintic.adminProjects.entities.ReportEntity;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReportRepository extends MongoRepository<ReportEntity, String>{
    
}
