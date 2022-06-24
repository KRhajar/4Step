package com.project.repository;

import com.project.model.ProjetTask;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository

public interface ProjectTaskRepository extends JpaRepository <ProjetTask, Long> {

    @Query("select p from ProjetTask p where p.projetIdentifier= ?1 ORDER BY priority DESC")
    List<ProjetTask> findByProjectIdentifierOrderByPriority(String id);

    @Query("select p from ProjetTask p where p.projetSequence=?1 ")
    ProjetTask findByProjectSequence(String projetSequence);

    @Transactional
    @Modifying
    @Query("delete from ProjetTask  where projetSequence=?1 ")
    void deleteByProjetSequence(String projetSequence);
}
