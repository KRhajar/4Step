package com.project.model;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;


import java.util.Date;

@JsonAutoDetect

@Getter
@Setter
@NoArgsConstructor
@Entity
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    private String projetName;

    //@NotBlank(message = "Identifiant is required ")
    @Column(updatable = false, unique = true)
    //@Size(min = 4, max = 5, message = "please enter 4 to 5 characters")
    private String projetIdentifier;


    private String projetDescription;

    //@NotBlank(message = "start date is required ")
    @JsonFormat(pattern = "yyyy-mm-dd")
    private Date start_date;

   // @NotBlank(message = "end date  is required ")
    @JsonFormat(pattern = "yyyy-mm-dd")
    private Date end_date;

    @JsonFormat(pattern = "yyyy-mm-dd")
    private Date dateCreated;

    @JsonFormat(pattern = "yyyy-mm-dd")
    private Date dateUpdated;

    @OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL, mappedBy = "project")
    @JsonIgnore
    private Backlog backlog;

    private Long user;

    @PrePersist
    protected void onCreate(){
        this.dateCreated = new Date();
    }

    @PreUpdate
    protected  void onUpdate(){
        this.dateUpdated = new Date();
    }

}
