package com.project.service;

import com.example.demo.appuser.AppUserRepository;
import com.project.model.Backlog;
import com.project.model.Project;
import com.project.repository.ProjetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProjetService {

    @Autowired
    ProjetRepository projetRepository;

    @Autowired
    AppUserRepository appUserRepository;

    //Ajout d un projet
    public Project createProjet(Project project) {

           // project.setProjetIdentifier(project.getProjetIdentifier());
            if(project.getId() == null) {
                Backlog backlog = new Backlog();
                project.setBacklog(backlog);
                backlog.setProject(project);
                backlog.setProjetIdentifier(project.getProjetIdentifier());
            }



            return  projetRepository.save(project);
    }

    //Update d'un projet
    public ResponseEntity<Project> updateProjet(Long id, Project project) {
        Project projectUpdate = projetRepository.findById(id).orElseThrow(() -> new RuntimeException(("project not exist with id " +id)));
        projectUpdate.setProjetName(project.getProjetName());
        projectUpdate.setProjetDescription(project.getProjetDescription());
        projectUpdate.setStart_date(project.getStart_date());
        projectUpdate.setEnd_date(project.getEnd_date());
        projetRepository.save(projectUpdate);
        return ResponseEntity.ok(projectUpdate);
    }
    //getProjectById
    public ResponseEntity<Project> getProjectByIdentifier(String projetIdentifier){
        Project project = projetRepository.findByProjectIdentifier(projetIdentifier);
        return ResponseEntity.ok(project);
    }
    //delete un projet
    public ResponseEntity<HttpStatus> deleteProject(Long id) {
        Project project = projetRepository.findById(id).orElseThrow(() -> new RuntimeException("projet with this id dosen't exist" +id));
         projetRepository.delete(project);
         return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
    //get All project
   public List<Project> getAllProject() {
        return projetRepository.findAll();
    }

    public List<Project> getAllProjectsByUser(Long user) {
        return  projetRepository.gellAllProjectByUser(user);
    }
}
