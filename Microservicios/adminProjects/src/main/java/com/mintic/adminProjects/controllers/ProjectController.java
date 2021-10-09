package com.mintic.adminProjects.controllers;

import com.mintic.adminProjects.dto.request.SetUserDto;
import com.mintic.adminProjects.entities.ProjectEntity;
import com.mintic.adminProjects.entities.UserEntity;
import com.mintic.adminProjects.repositories.ProjectRespository;
import com.mintic.adminProjects.repositories.UserRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProjectController {

    @Autowired
    ProjectRespository projectRespository;

    @Autowired
    UserRepository userRepository;

    @GetMapping("/projects")
    List<ProjectEntity> getAllProjects() {
        return projectRespository.findAll();
    }

    @PutMapping("/projects/set-lider")
    public ResponseEntity setLider(@RequestBody SetUserDto setUserDto) {

        ProjectEntity project = projectRespository.findById(setUserDto.getProjectId()).orElse(null);
        UserEntity user = userRepository.findById(setUserDto.getUserId()).orElse(null);
        if (project == null || user == null) {
            return ResponseEntity.notFound().build();
        }
        project.getLideres().add(user.getUserId());
        projectRespository.save(project);

        return ResponseEntity.ok("Líder asignado");
    }

    @PutMapping("/projects/set-estudiante")
    public ResponseEntity setEstudiante(@RequestBody SetUserDto setUserDto) {
        ProjectEntity project = projectRespository.findById(setUserDto.getProjectId()).orElse(null);
        UserEntity user = userRepository.findById(setUserDto.getUserId()).orElse(null);
        if (project == null || user == null) {
            return ResponseEntity.notFound().build();
        }
        project.getEstudiantes().add(user.getUserId());
        projectRespository.save(project);

        return ResponseEntity.ok("Estudiante asignado");
    }

}
