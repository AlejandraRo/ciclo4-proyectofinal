package com.mintic.adminProjects.controllers;

import com.mintic.adminProjects.entities.ProjectEntity;
import com.mintic.adminProjects.entities.UserEntity;
import com.mintic.adminProjects.repositories.ProjectRepository;
import com.mintic.adminProjects.repositories.UserRepository;
import com.mintic.adminProjects.repositories.UserRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;

@RestController
public class UserController {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private ProjectRepository projectRepository;

    //CREATE METHOD ------------------------
    
    @PostMapping("/newUsers")
    public UserEntity createUSer(@RequestBody UserEntity newUser) {
    	return userRepository.save(newUser);
    }
    
    //GET METHODS ------------------------

    @GetMapping("/users/{userId}")
    Optional<UserEntity> getUsers(@PathVariable String userId) {
        return Optional.ofNullable(userRepository.findById(userId).orElse(null));
    }

    @GetMapping("/users")
    List<UserEntity> getAllUsers() {
        return userRepository.findAll();
    }

    @GetMapping("/users/project/{projectId}")
    List<UserEntity> getProjectUsers(@PathVariable String projectId) {
        Optional<ProjectEntity> proyectos = projectRepository.findById(projectId);
        ProjectEntity proyecto = proyectos.get();
        List<UserEntity> retorno = new ArrayList<>();

        proyecto.getEstudiantes().stream().map(id -> userRepository.findById(id)).forEachOrdered(usuario -> {
            retorno.add(usuario.get());
        });

        proyecto.getLideres().stream().map(id -> userRepository.findById(id)).forEachOrdered(usuario -> {
            retorno.add(usuario.get());
        });
        return retorno;
    }

    //UPDATE METHOD ------------------------
    
    @PutMapping("/user/update/{id}")
    public ResponseEntity<String> updateUser(@PathVariable String id, @RequestBody UserEntity userDetails){
    	
    	UserEntity specificUser = userRepository.findById(id).orElse(null);
    	    	
    	specificUser.setRol(userDetails.getRol());
    	specificUser.setCarrera(userDetails.getCarrera());
    	specificUser.setCelular(userDetails.getCelular());
    	specificUser.setNombre(userDetails.getNombre());
    	specificUser.setFecha_ingreso(userDetails.getFecha_ingreso());
    	specificUser.setPassword(userDetails.getPassword());
    	specificUser.setUsername(userDetails.getUsername());
    	specificUser.setUpdatedAt(new Date(0));
    	
    	final UserEntity updatedUser = userRepository.save(specificUser);  	
    	return ResponseEntity.ok("Usuario actualizado");
    	
    }

}
