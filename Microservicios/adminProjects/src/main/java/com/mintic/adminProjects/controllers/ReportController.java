package com.mintic.adminProjects.controllers;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import com.mintic.adminProjects.entities.ReportEntity;
import com.mintic.adminProjects.repositories.ReportRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

public class ReportController implements ReportRepository{

    @Autowired ReportRepository reportRepository;
        
    //CREATE
    void createReport(String id, String idUsuario, String reporte, String estado, String fase, 
    LocalDate createdAt, LocalDate updDate) {

        reportRepository.save(new ReportEntity("01", "506", "Prueba reporte avance del proyecto", "Aqui va el estado", 
        "Aqui va la fase", LocalDate.now(), LocalDate.now()));
        
    }

    @Override
    public List<ReportEntity> findAll() {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public List<ReportEntity> findAll(Sort sort) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public <S extends ReportEntity> List<S> findAll(Example<S> example) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public <S extends ReportEntity> List<S> findAll(Example<S> example, Sort sort) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public <S extends ReportEntity> S insert(S entity) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public <S extends ReportEntity> List<S> insert(Iterable<S> entities) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public <S extends ReportEntity> List<S> saveAll(Iterable<S> entities) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public Page<ReportEntity> findAll(Pageable pageable) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public <S extends ReportEntity> S save(S entity) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public Optional<ReportEntity> findById(String id) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public boolean existsById(String id) {
        // TODO Auto-generated method stub
        return false;
    }

    @Override
    public Iterable<ReportEntity> findAllById(Iterable<String> ids) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public long count() {
        // TODO Auto-generated method stub
        return 0;
    }

    @Override
    public void deleteById(String id) {
        // TODO Auto-generated method stub
        
    }

    @Override
    public void delete(ReportEntity entity) {
        // TODO Auto-generated method stub
        
    }

    @Override
    public void deleteAllById(Iterable<? extends String> ids) {
        // TODO Auto-generated method stub
        
    }

    @Override
    public void deleteAll(Iterable<? extends ReportEntity> entities) {
        // TODO Auto-generated method stub
        
    }

    @Override
    public void deleteAll() {
        // TODO Auto-generated method stub
        
    }

    @Override
    public <S extends ReportEntity> Optional<S> findOne(Example<S> example) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public <S extends ReportEntity> Page<S> findAll(Example<S> example, Pageable pageable) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public <S extends ReportEntity> long count(Example<S> example) {
        // TODO Auto-generated method stub
        return 0;
    }

    @Override
    public <S extends ReportEntity> boolean exists(Example<S> example) {
        // TODO Auto-generated method stub
        return false;
    }

            
    
}
