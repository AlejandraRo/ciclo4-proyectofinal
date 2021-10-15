package com.mintic.adminProjects.repositories;

import com.mintic.adminProjects.models.UserEntity;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<UserEntity,String> {

}
