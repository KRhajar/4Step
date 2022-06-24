package com.project.controller;

import com.example.demo.appuser.AppUser;
import com.project.model.Project;
import com.project.service.ProjetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin("*")
@RestController
@RequestMapping("/api/project")
public class ProjetController {

    @Autowired
    ProjetService projetService;

    //Ajout d un projet
    @PostMapping("/addPoject")
    public Project createProject(@RequestBody  Project project){
        return projetService.createProjet(project);
    }

    //get un projet by projetIdentifier
    @GetMapping("{projetIdentifier}")
    public ResponseEntity<Project> getProjectByIdentifier(@PathVariable String projetIdentifier){
        return projetService.getProjectByIdentifier(projetIdentifier);
    }
    @GetMapping("/user/{user}")
    public List<Project> getAllProjectsByUser(@PathVariable Long user){
        return projetService.getAllProjectsByUser(user);
    }

    //get all projectS
   @GetMapping("/All")
   public ResponseEntity<List<Project>>getAllProject(){
            return ResponseEntity.ok(projetService.getAllProject());
            }

    //Update d'un projet
    @PutMapping("/updateProject/{id}")
    public ResponseEntity<Project> updateProject(@PathVariable Long id, @RequestBody Project project){
        return projetService.updateProjet(id,project);
    }
    //Supprimer un projet
    @DeleteMapping("/deleteProject/{id}")
    public ResponseEntity<HttpStatus> deleteProject(@PathVariable Long id){
        return projetService.deleteProject(id);
    }

}
