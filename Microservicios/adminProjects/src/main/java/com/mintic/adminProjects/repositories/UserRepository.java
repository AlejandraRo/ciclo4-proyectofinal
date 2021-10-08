package com.mintic.adminProjects.repositories;

import com.mintic.adminProjects.entities.UserEntity;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;


public interface UserRepository  extends MongoRepository<UserEntity, ObjectId> {

}
