package com.mintic.adminProjects.models;

import java.util.Date;
import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("proyectos")
public class ProjectEntity {
	
	@Id
	private ObjectId id;
	
	private String name;
	private String descripcion;
	private Number presupuesto;
	private String objetivo_general;
	private List<String> objetivos_especificos;
	private Date fecha_inicial;
	private Date fecha_final;
	private List<ObjectId> usuarios;
	private List<ReportEntity>reporte_avance;
	private String estado;
	private Date createdAt;
	private Date updatedAt;
	
	public ProjectEntity(ObjectId id, String name, String descripcion, Number presupuesto, String objetivo_general,
			List<String> objetivos_especificos, Date fecha_inicial, Date fecha_final, List<ObjectId> usuarios,
			List<ReportEntity> reporte_avance, String estado, Date createdAt, Date updatedAt) {
		super();
		this.id = id;
		this.name = name;
		this.descripcion = descripcion;
		this.presupuesto = presupuesto;
		this.objetivo_general = objetivo_general;
		this.objetivos_especificos = objetivos_especificos;
		this.fecha_inicial = fecha_inicial;
		this.fecha_final = fecha_final;
		this.usuarios = usuarios;
		this.reporte_avance = reporte_avance;
		this.estado = estado;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
	}
	
	public ObjectId getId() {
		return id;
	}
	public void setId(ObjectId id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescripcion() {
		return descripcion;
	}
	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}
	public Number getPresupuesto() {
		return presupuesto;
	}
	public void setPresupuesto(Number presupuesto) {
		this.presupuesto = presupuesto;
	}
	public String getObjetivo_general() {
		return objetivo_general;
	}
	public void setObjetivo_general(String objetivo_general) {
		this.objetivo_general = objetivo_general;
	}
	public List<String> getObjetivos_especificos() {
		return objetivos_especificos;
	}
	public void setObjetivos_especificos(List<String> objetivos_especificos) {
		this.objetivos_especificos = objetivos_especificos;
	}
	public Date getFecha_inicial() {
		return fecha_inicial;
	}
	public void setFecha_inicial(Date fecha_inicial) {
		this.fecha_inicial = fecha_inicial;
	}
	public Date getFecha_final() {
		return fecha_final;
	}
	public void setFecha_final(Date fecha_final) {
		this.fecha_final = fecha_final;
	}
	public List<ObjectId> getUsuarios() {
		return usuarios;
	}
	public void setUsuarios(List<ObjectId> usuarios) {
		this.usuarios = usuarios;
	}
	public List<ReportEntity> getReporte_avance() {
		return reporte_avance;
	}
	public void setReporte_avance(List<ReportEntity> reporte_avance) {
		this.reporte_avance = reporte_avance;
	}
	public String getEstado() {
		return estado;
	}
	public void setEstado(String estado) {
		this.estado = estado;
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
