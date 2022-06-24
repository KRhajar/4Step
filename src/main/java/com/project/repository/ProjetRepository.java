package com.project.repository;

import com.project.model.Project;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ProjetRepository extends JpaRepository<Project, Long> {

    @Query("select p from Project p where p.projetIdentifier=?1")
    Project findByProjectIdentifier(String projetIdentifier);

    //@Query("")
    //terable<Project> findAllByProjectLeader(String username);

    @Query("select p from Project p where p.user=?1")
    List<Project> gellAllProjectByUser(Long user);
}
