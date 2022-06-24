package com.project.repository;

import com.project.model.Backlog;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface BacklogRepository extends JpaRepository <Backlog, Long> {

    @Query("select b from Backlog b where b.projetIdentifier=?1")
    Backlog findByProjectIdentifier(String ProjectIdentifier);
}
