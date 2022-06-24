package com.project.service;

import com.project.exception.ProjectNotFoundException;
import com.project.model.Backlog;
import com.project.model.Project;
import com.project.model.ProjetTask;
import com.project.repository.BacklogRepository;
import com.project.repository.ProjectTaskRepository;
import com.project.repository.ProjetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class ProjectTaskService {

     @Autowired
     ProjectTaskRepository projectTaskRepository;

     @Autowired
     BacklogRepository backlogRepository;

     @Autowired
    ProjetRepository projetRepository;

    //Ajout d un projet task
     public ProjetTask addProjectTask(String projectIdentifier, ProjetTask projetTask){
         //Exception : Project not found
         try {
             // PTs to be added to a specific project, project != null, Bl exists
             Backlog backlog = backlogRepository.findByProjectIdentifier(projectIdentifier);
             // set the backlog to the project task
             projetTask.setBacklog(backlog);
             // we want our project sequence to be like this : idpro+1 idpro+2 the task within the project not from db
             Integer BacklogSequence = backlog.getPTSequence();
             // update the BL sequence
             BacklogSequence++;
             backlog.setPTSequence(BacklogSequence);
             //add sequence to project task
             projetTask.setProjetSequence(backlog.getProjetIdentifier() + "-" + BacklogSequence);
             projetTask.setProjetIdentifier(projectIdentifier);
             //Initial priority when priority is null
             // In the future we need projectTask.getPriority()==0 to handle the form
             if(projetTask.getPriority() == null){
                 projetTask.setPriority(3);
             }
             //Initial status when status is null
             if(projetTask.getStatus() == "" || projetTask.getStatus() == null){
                 projetTask.setStatus("TO DO");
             }
             return projectTaskRepository.save(projetTask);

         } catch (Exception e){
             throw new ProjectNotFoundException("Project not found");
         }
     }

    // Afficher backlog contient tous les projets task
    public Iterable<ProjetTask> findBacklogById(String backlog_id) {
        Project project = projetRepository.findByProjectIdentifier(backlog_id);
        if(project == null){
            throw new ProjectNotFoundException("Project with id " + backlog_id + " doesn't exist");
        }
         return projectTaskRepository.findByProjectIdentifierOrderByPriority(backlog_id);
     }

     //Afficher un projetTask of a backlog
    public ProjetTask findProjetTaskByProjetSequence(String backlog_id, String projetSequence){
         //make sure we are searching on the right backlog
        Backlog backlog = backlogRepository.findByProjectIdentifier(backlog_id);
        if(backlog == null){
            throw new ProjectNotFoundException("Project with id " + backlog_id + " doesn't exist");
        }
         //make sure that our task exists
        ProjetTask projetTask = projectTaskRepository.findByProjectSequence(projetSequence);
        if(projetTask == null){
            throw new ProjectNotFoundException("Project Task "+ projetSequence+" not found");
        }
        //make sure that the backloh/project id in the path corresponds to the right project
        if(!projetTask.getProjetIdentifier().equals(backlog_id)){
            throw new ProjectNotFoundException("project task " +projetSequence+" does not exist in the project" + backlog_id);
        }
        return projetTask;
    }

    //update a project task
    public ProjetTask updateProjectTask(ProjetTask projetTask, String backlog_id, String projetSequence){
         ProjetTask updateProjetTask= findProjetTaskByProjetSequence(backlog_id, projetSequence);

         updateProjetTask.setProjetTaskSummary(projetTask.getProjetTaskSummary());
         updateProjetTask.setProjetTaskDescription(projetTask.getProjetTaskDescription());
         updateProjetTask.setDateProjetTask(projetTask.getDateProjetTask());
         updateProjetTask.setPriority(projetTask.getPriority());
         updateProjetTask.setStatus(projetTask.getStatus());

         return projectTaskRepository.save(updateProjetTask);
         //update project task
        //find existing project task
        //replace it with update task
        //save update
    }
    //delete a project task
    public ResponseEntity<HttpStatus> deletePTByProjectSequence(String backlog_id, String projetSequence) {
        ProjetTask projectTask = findProjetTaskByProjetSequence(backlog_id, projetSequence);
        projectTaskRepository.deleteByProjetSequence(projetSequence);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }
}
