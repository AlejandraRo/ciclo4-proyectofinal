package com.mintic.adminProjects.entities;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("proyectos")
public class ReportEntity {
	
	@Id
	private String id;
	
	private List<String> usuarios_id;
	private String reporte;
	private String estado;
	private String fase;
	private LocalDate createdAt;
	private LocalDate updatedAt;
	private String usuCrea;
	
	public ReportEntity(String id, String usuCrea, String reporte, String estado, String fase,
			LocalDate createdAt, LocalDate updatedAt) {
		super();
		this.id = id;
		//this.usuarios_id = usuarios_id;
		this.reporte = reporte;
		this.estado = estado;
		this.fase = fase;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
		this.usuCrea = usuCrea;
	}

	public String getUsuCrea() {
		return usuCrea;
	}

	public void setUsuCrea(String usuCrea) {
		this.usuCrea = usuCrea;
	}

	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public List<String> getUsuarios_id() {
		return usuarios_id;
	}
	public void setUsuarios_id(List<String> usuarios_id) {
		this.usuarios_id = usuarios_id;
	}
	public String getReporte() {
		return reporte;
	}
	public void setReporte(String reporte) {
		this.reporte = reporte;
	}
	public String getEstado() {
		return estado;
	}
	public void setEstado(String estado) {
		this.estado = estado;
	}
	public String getFase() {
		return fase;
	}
	public void setFase(String fase) {
		this.fase = fase;
	}
	public LocalDate getCreatedAt() {
		return createdAt;
	}
	public void setCreatedAt(LocalDate createdAt) {
		this.createdAt = createdAt;
	}
	public LocalDate getUpdatedAt() {
		return updatedAt;
	}
	public void setUpdatedAt(LocalDate updatedAt) {
		this.updatedAt = updatedAt;
	}
}
