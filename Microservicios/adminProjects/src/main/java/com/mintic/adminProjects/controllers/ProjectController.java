package com.mintic.adminProjects.controllers;

import com.mintic.adminProjects.dto.request.SetUserDto;
import com.mintic.adminProjects.entities.ProjectEntity;
import com.mintic.adminProjects.entities.ReportEntity;
import com.mintic.adminProjects.entities.UserEntity;
import com.mintic.adminProjects.repositories.ProjectRepository;
import com.mintic.adminProjects.repositories.ReportRepository;
import com.mintic.adminProjects.repositories.UserRepository;

import java.time.LocalDate;
import java.sql.Date;
import java.util.List;
import java.util.ArrayList;
import java.util.Objects;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/projects")
public class ProjectController {

    @Autowired
    ProjectRepository projectRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    ReportRepository reportRepository;

    /*private final UserRepository userRepository;
    private final ProjectRepository projectRepository;*/

    public ProjectController(UserRepository userRepository, ProjectRepository projectRepository) {
        this.userRepository = userRepository;
        this.projectRepository = projectRepository;
    } 

    //CREATE METHODS -------------------------------
	
	@PostMapping("/newProject")
    ProjectEntity newProject(@RequestBody ProjectEntity project){
		            
        project.setFecha_inicial(new Date(0));
        project.setFecha_final(new Date(0));
        
        project.setCreatedAt(new Date(0));
        project.setUpdatedAt(new Date(0));
        
        return projectRepository.save(project);
    }

    //GET METHODS -------------------------------

    @GetMapping("/")
    List<ProjectEntity> getAllProjects() {
        return projectRepository.findAll();
    }

    @GetMapping("/projects/{id}")
	public ProjectEntity getProjectByName(@PathVariable String id) {
		return projectRepository.findProjectById(id);
	}

    @GetMapping("/project/users/{idUser}")
    public List<ProjectEntity> getProjectByUser(@PathVariable String idUser){
		List<ProjectEntity> allProjects = projectRepository.findAll();
		
		List<ProjectEntity> projectsByUser = new ArrayList<>();
		
		for(int i= 0; i<allProjects.size(); i++) {
			Stream<String> Lider = allProjects.get(i).getLideres().stream().filter(f -> f.equals(idUser));
			Stream<String> Estudiante = allProjects.get(i).getEstudiantes().stream().filter(f -> f.equals(idUser));
			
			if(Lider.count() > 0 || Estudiante.count() > 0) {
				projectsByUser.add(allProjects.get(i));
			}
		}		
		return projectsByUser;
    }

    //UPDATE METHODS -------------------------------

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
    public ResponseEntity<String> setReporte(@RequestBody SetUserDto setUserDto) {
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
