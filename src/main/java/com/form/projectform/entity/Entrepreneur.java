package com.form.projectform.entity;

import com.sun.istack.NotNull;

import javax.persistence.*;

@Entity
@Table(name="entrepreneur")
public class Entrepreneur {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
public  int id ;
    @NotNull
public String email;

public String intitlule;

public String description;

    public String nom_prenom;

    public String ville;

    public String telephone;

    public String diplome;

    public String nom_autre_membre;

    public String Domaine;
    @Column(updatable = false)
    public String verificationCode;

    public String getVerificationCode() {
        return verificationCode;
    }

    public void setVerificationCode(String verificationCode) {
        this.verificationCode = verificationCode;
    }



    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getIntitlule() {
        return intitlule;
    }

    public void setIntitlule(String intitlule) {
        this.intitlule = intitlule;
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
}
