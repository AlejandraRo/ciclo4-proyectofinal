package com.mintic.adminProjects;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class AdminProjectsApplication {

	public static void main(String[] args) {
		SpringApplication.run(AdminProjectsApplication.class, args);
		System.out.println("ejecutando en el puerto 8080");
	}

}
