package com.form.projectform.service;

import com.form.projectform.entity.Entrepreneur;

import javax.mail.MessagingException;
import java.io.UnsupportedEncodingException;
import java.util.List;

public interface EntrepreneurService  {
    public List<Entrepreneur> findAllEntropreneurs();
public void saveEntrepreneur(Entrepreneur entrepreneur) throws MessagingException, UnsupportedEncodingException;
public Entrepreneur findEntrepreneurById(Long id);
public void deleteEntrepreneurById( Long id);

}
