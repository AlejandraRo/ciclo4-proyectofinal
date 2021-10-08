package com.mintic.adminProjects.controllers;

import com.mintic.adminProjects.entities.ProjectEntity;
import com.mintic.adminProjects.entities.UserEntity;
import com.mintic.adminProjects.repositories.ProjectRespository;
import com.mintic.adminProjects.repositories.UserRepository;
import org.bson.types.ObjectId;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController

public class UserController {
    private final UserRepository userRepository;
    private final ProjectRespository projectRespository;

    public UserController(UserRepository userRepository, ProjectRespository projectRespository) {
        this.userRepository = userRepository;
        this.projectRespository = projectRespository;
    }
    @GetMapping("/users/{userId}")
    Optional<UserEntity> getUsers(@PathVariable ObjectId userId){
        return Optional.ofNullable(userRepository.findById(userId).orElse(null));
    }


    @GetMapping("/users")
    List<UserEntity> getAllUsers(){
        return userRepository.findAll();
    }

    @GetMapping("/users/project/{projectId}")
    List<UserEntity> getProjectUsers(@PathVariable ObjectId projectId){
        Optional<ProjectEntity> proyectos= projectRespository.findById(projectId);
        ProjectEntity proyecto = proyectos.get();
        List<UserEntity> retorno= new ArrayList<>();
        for (ObjectId id : proyecto.getUsuarios()){
            Optional<UserEntity> usuario=userRepository.findById(id);
            retorno.add(usuario.get());
        }
        return retorno;
    }

}
