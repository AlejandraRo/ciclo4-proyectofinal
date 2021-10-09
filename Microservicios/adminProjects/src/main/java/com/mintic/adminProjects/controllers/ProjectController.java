package com.mintic.adminProjects.controllers;

import com.mintic.adminProjects.dto.request.SetUserDto;
import com.mintic.adminProjects.entities.ProjectEntity;
import com.mintic.adminProjects.entities.ReportEntity;
import com.mintic.adminProjects.entities.UserEntity;
import com.mintic.adminProjects.repositories.ProjectRepository;
import com.mintic.adminProjects.repositories.ReportRepository;
import com.mintic.adminProjects.repositories.UserRepository;

import java.time.LocalDate;
import java.util.List;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProjectController {

    @Autowired
    ProjectRepository projectRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    ReportRepository reportRepository;

    @GetMapping("/projects")
    List<ProjectEntity> getAllProjects() {
        return projectRepository.findAll();
    }

    @PutMapping("/projects/set-lider")
    public ResponseEntity setLider(@RequestBody SetUserDto setUserDto) {

        ProjectEntity project = projectRepository.findById(setUserDto.getProjectId()).orElse(null);
        UserEntity user = userRepository.findById(setUserDto.getUserId()).orElse(null);
        if (project == null || user == null) {
            return ResponseEntity.notFound().build();
        }
        project.getLideres().add(user.getUserId());
        projectRepository.save(project);

        return ResponseEntity.ok("Líder asignado");
    }

    @PutMapping("/projects/set-estudiante")
    public ResponseEntity setEstudiante(@RequestBody SetUserDto setUserDto) {
        ProjectEntity project = projectRepository.findById(setUserDto.getProjectId()).orElse(null);
        UserEntity user = userRepository.findById(setUserDto.getUserId()).orElse(null);
        if (project == null || user == null) {
            return ResponseEntity.notFound().build();
        }
        project.getEstudiantes().add(user.getUserId());
        projectRepository.save(project);

        return ResponseEntity.ok("Estudiante asignado");
    }

    @PutMapping("/projects/reporte-avance/{proyectId}")
    public ResponseEntity setReporte(@RequestBody SetUserDto setUserDto) {
        ProjectEntity project = projectRepository.findById(setUserDto.getProjectId()).orElse(null);
        UserEntity user = userRepository.findById(setUserDto.getUserId()).orElse(null);
        
        if (Objects.isNull(project) || Objects.isNull(user)) {
            return ResponseEntity.notFound().build();
        }else{
            ReportEntity report = new ReportEntity("02", user.getUserId(), "Aqui va el reporte de avance", "Aqui va el estado", 
            "Aqui va la fase", LocalDate.now(), LocalDate.now());
            if(Objects.isNull(report)){
                return ResponseEntity.notFound().build();
            }else{
                project.getReporte_avance().add(report);
                projectRepository.save(project);
            }            

        }
        
        return ResponseEntity.ok("Reporte agregado con éxito!");
    }

}
