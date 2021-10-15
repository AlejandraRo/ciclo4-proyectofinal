package com.mintic.adminProjects.controllers;

import com.mintic.adminProjects.models.UserEntity;
import com.mintic.adminProjects.repositories.ProjectRepository;
import com.mintic.adminProjects.repositories.UserRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;
import java.util.Optional;

@RestController
public class UserController {
    private final UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;

        UserEntity newUser01=new UserEntity("006","Scrum master","Daniel Cadavid","Ingenieria electronica","3201245678",null,null,null,"daniel.cadavid","123");
        UserEntity newUser02=new UserEntity("008","Director","Paula Sandoval","Ingenieria de software","3201232221",null,null,null,"pau.san","abc");

        this.userRepository.save(newUser01);
        this.userRepository.save(newUser02);



    }
    @GetMapping("/UserEntity/{userId}")
    Optional<UserEntity> getUsers(@PathVariable String userId){
        return userRepository.findById(userId);
    }

}
