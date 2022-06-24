package com.project.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class Backlog {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Integer PTSequence=0;

    private String projetIdentifier;

    //OneToOne with Project
    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "project_id", nullable = false)
    @JsonIgnore
    private Project project;

    //OneToMany with ProjetTask // backlog can have one or more projectTask but projectTask can appartient to one backlog
    @OneToMany(cascade = CascadeType.ALL, fetch =  FetchType.EAGER, mappedBy = "backlog")
    private List<ProjetTask> projetTasks = new ArrayList<>();
}
