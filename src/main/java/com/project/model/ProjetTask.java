package com.project.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.util.Date;

@Entity
@NoArgsConstructor
@Getter
@Setter
@ToString
public class ProjetTask {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    //project identifier + ptsequence(within the project not from db )
    @Column(updatable = false, unique = true)
    private String projetSequence;


    private String projetTaskSummary;

    private String acceptanceCriteria;


    private String projetTaskDescription;

    //@NotBlank(message = "status is required")
    private String status;

   // @NotBlank(message = "priority is required")
    private Integer priority;

    @JsonFormat(pattern = "yyyy-mm-dd")
    private Date dateProjetTask;

    @Column(updatable = false)
    private  String projetIdentifier;

    //ManyToOne with backlog
    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.REFRESH)
    @JoinColumn(name = "backlog_id", updatable = false, nullable = false)
    @JsonIgnore
    private Backlog backlog;

    private Date created_At;
    private Date updated_At;

    @PrePersist
    protected void onCreate(){
        this.created_At = new Date();
    }

    @PreUpdate
    protected  void onUpdate(){
        this.updated_At = new Date();
    }




}
