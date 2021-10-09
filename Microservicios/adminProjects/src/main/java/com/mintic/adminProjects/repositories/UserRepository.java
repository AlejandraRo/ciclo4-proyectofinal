package com.mintic.adminProjects.repositories;

import com.mintic.adminProjects.entities.UserEntity;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository  extends MongoRepository<UserEntity, String> {

}
