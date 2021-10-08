package com.mintic.adminProjects.models;

import java.util.Date;
import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;

public class ReportEntity {
	
	@Id
	private ObjectId id;
	
	private List<ObjectId> usuarios_id;
	private String reporte;
	private String estado;
	private String fase;
	private Date createdAt;
	private Date updatedAt;
	
	public ReportEntity(ObjectId id, List<ObjectId> usuarios_id, String reporte, String estado, String fase,
			Date createdAt, Date updatedAt) {
		super();
		this.id = id;
		this.usuarios_id = usuarios_id;
		this.reporte = reporte;
		this.estado = estado;
		this.fase = fase;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
	}

	public ObjectId getId() {
		return id;
	}
	public void setId(ObjectId id) {
		this.id = id;
	}
	public List<ObjectId> getUsuarios_id() {
		return usuarios_id;
	}
	public void setUsuarios_id(List<ObjectId> usuarios_id) {
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
	public Date getCreatedAt() {
		return createdAt;
	}
	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}
	public Date getUpdatedAt() {
		return updatedAt;
	}
	public void setUpdatedAt(Date updatedAt) {
		this.updatedAt = updatedAt;
	}
}
