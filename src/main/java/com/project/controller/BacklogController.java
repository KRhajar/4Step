package com.project.controller;

import com.project.model.ProjetTask;
import com.project.service.ProjectTaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@RequestMapping("/api/backlog")
@CrossOrigin("*")
public class BacklogController {

    @Autowired
    ProjectTaskService projectTaskService;

    //ajouter un projet task
    @PostMapping("/{backlog_id}")
    public ProjetTask addProjectTaskToBacklog( @PathVariable String backlog_id, @RequestBody ProjetTask projetTask){
        return  projectTaskService.addProjectTask(backlog_id, projetTask);
    }

    //get all the project tasks of a backlog
    @GetMapping("/{backlog_id}")
    public Iterable<ProjetTask> getProjectbacklog(@PathVariable String backlog_id){
        return projectTaskService.findBacklogById(backlog_id);
    }

    @GetMapping("/{backlog_id}/{projetSequence}")
    public ResponseEntity<ProjetTask> getProjetTask(@PathVariable String backlog_id, @PathVariable String projetSequence ){
        ProjetTask projetTask = projectTaskService.findProjetTaskByProjetSequence(backlog_id, projetSequence);
        return ResponseEntity.ok(projetTask);
    }

    @PatchMapping("/{backlog_id}/{projetSequence}")
    public ResponseEntity<ProjetTask> updateProjetTask( @RequestBody ProjetTask projetTask, @PathVariable String backlog_id, @PathVariable String projetSequence){
        ProjetTask projetTask1 = projectTaskService.updateProjectTask(projetTask, backlog_id, projetSequence);
        return ResponseEntity.ok(projetTask1);
    }

    @DeleteMapping("/{backlog_id}/{projetSequence}")
    public ResponseEntity<HttpStatus> deleteProjectTask(@PathVariable String backlog_id, @PathVariable String projetSequence ){
         return projectTaskService.deletePTByProjectSequence(backlog_id, projetSequence);
    }
}
