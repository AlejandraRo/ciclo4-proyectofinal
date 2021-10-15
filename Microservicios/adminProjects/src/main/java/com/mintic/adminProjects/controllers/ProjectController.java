package com.mintic.adminProjects.controllers;

import com.mintic.adminProjects.models.ProjectEntity;
import com.mintic.adminProjects.models.UserEntity;
import com.mintic.adminProjects.repositories.ProjectRepository;
import com.mintic.adminProjects.repositories.UserRepository;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
public class ProjectController {

    private final UserRepository userRepository;
    private final ProjectRepository projectRepository;

    public ProjectController(UserRepository userRepository, ProjectRepository projectRepository) {
        this.userRepository = userRepository;
        this.projectRepository = projectRepository;
    }

    @PostMapping("/ProjectEntity")
    ProjectEntity newProject(@RequestBody ProjectEntity project){
        UserEntity UserId=userRepository.findById(project.getIdUser()).orElse(null);
        UserId.setRol(UserId.getRol());
        UserId.setCarrera(UserId.getCarrera());
        UserId.setCelular(UserId.getCelular());
        UserId.setNombre(UserId.getNombre());
        UserId.setUsername(UserId.getUsername());
        UserId.setPassword(UserId.getPassword());
        userRepository.save(UserId);
        project.setFecha_inicial(new Date());
        project.setFecha_final(new Date());
        project.setCreatedAt(new Date());
        project.setUpdatedAt(new Date());
        return projectRepository.save(project);
    }
    @GetMapping("/ProjectEntity/{idUser}")
    List<ProjectEntity> userProject(@PathVariable String idUser){
        List<ProjectEntity> projectUser=projectRepository.findByIdUser(idUser);
        return projectUser;
    }
}
