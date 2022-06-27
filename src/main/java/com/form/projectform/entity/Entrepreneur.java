package com.form.projectform.entity;

import com.sun.istack.NotNull;

import javax.persistence.*;

@Entity
@Table(name="entrepreneur")
public class Entrepreneur {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public  Long id ;
    @NotNull
    public String email;

    public String intilule;

    public String description;

    public String nom_prenom;

    public String ville;

    public String telephone;

    public String diplome;

    public String nom_autre_membre;

    public String Domaine;
    public String motivation;
    public String dev_idee;
    public String etat="En cours d'étude";


    public String innovation;
    public String duree;
    public String originalite;
    public String impact;
    public String responsabilite;
    public String perennite;
    public  Long idCoach ;

    public String getIntilule() {
        return intilule;
    }

    public void setIntilule(String intilule) {
        this.intilule = intilule;
    }

    public Long getIdCoach() {
        return idCoach;
    }

    public void setIdCoach(Long idCoach) {
        this.idCoach = idCoach;
    }

    public void setMotivation(String motivation) {
        this.motivation = motivation;
    }

    public void setDev_idee(String dev_idee) {
        this.dev_idee = dev_idee;
    }

    public void setInnovation(String innovation) {
        this.innovation = innovation;
    }

    public void setDuree(String duree) {
        this.duree = duree;
    }

    public void setOriginalite(String originalite) {
        this.originalite = originalite;
    }

    public void setImpact(String impact) {
        this.impact = impact;
    }

    public void setResponsabilite(String responsabilite) {
        this.responsabilite = responsabilite;
    }

    public void setPerennite(String perennite) {
        this.perennite = perennite;
    }

    public String getMotivation() {
        return motivation;
    }

    public String getDev_idee() {
        return dev_idee;
    }

    public String getInnovation() {
        return innovation;
    }

    public String getDuree() {
        return duree;
    }

    public String getOriginalite() {
        return originalite;
    }

    public String getImpact() {
        return impact;
    }

    public String getResponsabilite() {
        return responsabilite;
    }

    public String getPerennite() {
        return perennite;
    }






    @Column(updatable = false)
    public String verificationCode;

    public String getVerificationCode() {
        return verificationCode;
    }

    public void setVerificationCode(String verificationCode) {
        this.verificationCode = verificationCode;
    }



    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getIntitlule() {
        return intilule;
    }

    public void setIntitlule(String intitlule) {
        this.intilule = intitlule;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getNom_prenom() {
        return nom_prenom;
    }

    public void setNom_prenom(String nom_prenom) {
        this.nom_prenom = nom_prenom;
    }

    public String getVille() {
        return ville;
    }

    public void setVille(String ville) {
        this.ville = ville;
    }

    public String getTelephone() {
        return telephone;
    }

    public void setTelephone(String telephone) {
        this.telephone = telephone;
    }

    public String getDiplome() {
        return diplome;
    }

    public void setDiplome(String diplome) {
        this.diplome = diplome;
    }

    public String getNom_autre_membre() {
        return nom_autre_membre;
    }

    public void setNom_autre_membre(String nom_autre_membre) {
        this.nom_autre_membre = nom_autre_membre;
    }

    public String getDomaine() {
        return Domaine;
    }

    public void setDomaine(String domaine) {
        Domaine = domaine;
    }

    public String getEtat() {
        return etat;
    }

    public void setEtat(String etat) {
        this.etat = etat;
    }
}