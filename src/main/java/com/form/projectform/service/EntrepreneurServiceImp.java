package com.form.projectform.service;

import com.form.projectform.entity.Entrepreneur;
import com.form.projectform.repository.EntrepreneurRepository;
import net.bytebuddy.utility.RandomString;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import javax.transaction.Transactional;
import java.io.UnsupportedEncodingException;
import java.util.List;
import java.util.Objects;

@Service
public class EntrepreneurServiceImp implements EntrepreneurService{

    @Autowired
    EntrepreneurRepository entrepreneurRepository;
     @Autowired
    private JavaMailSender mailSender;

    @Override
    public List<Entrepreneur> findAllEntropreneurs() {
       List<Entrepreneur> entrepreneurList= entrepreneurRepository.findAll();
        return entrepreneurList ;
    }

    @Override
    public void saveEntrepreneur(Entrepreneur entrepreneur) throws MessagingException, UnsupportedEncodingException {


      String randomCode=RandomString .make();
      entrepreneur.setVerificationCode(randomCode);
        entrepreneurRepository.save(entrepreneur);
        sendVerificationEmail(entrepreneur);

    }

    public void sendVerificationEmail(Entrepreneur entrepreneur) throws MessagingException, UnsupportedEncodingException {
String subject="project successfully registred";
String sendername="p2e team";
String  mailContent="<p>Dear<br>"+entrepreneur.getNom_prenom()+", you just filled succesfuly your project  info<p>";
        mailContent+="<p>thank you  <br> p2e team</p>";
        MimeMessage message=mailSender.createMimeMessage();
        MimeMessageHelper helper=new MimeMessageHelper(message);
        helper.setFrom("kerroumihajar98@gmail.com",sendername);
        helper.setTo(entrepreneur.getEmail());
        helper.setText(mailContent,true);
        mailSender.send(message);

    }
    @Transactional
    public Entrepreneur editEntrepreneur(Long entrepreneurId,Entrepreneur entrepreneurDetails) {

        Entrepreneur entrepreneur=entrepreneurRepository.findById(entrepreneurId).get();

        if( entrepreneur.getEtat() !=null
                && !Objects.equals(entrepreneur.getEtat(),entrepreneurDetails.getEtat()) ){
            entrepreneur.setEtat(entrepreneurDetails.getEtat());
        }


        return entrepreneur;
    }

    @Transactional
    public Entrepreneur affectation(Long entrepreneurId,Entrepreneur entrepreneurDetails) {

        Entrepreneur entrepreneur=entrepreneurRepository.findById(entrepreneurId).get();

        if( entrepreneur.getIdCoach() !=null
                && !Objects.equals(entrepreneur.getIdCoach(),entrepreneurDetails.getIdCoach()) ){
            entrepreneur.setIdCoach(entrepreneurDetails.getIdCoach());
        }


        return entrepreneur;
    }

    @Override
    public Entrepreneur findEntrepreneurById(Long id) {
       Entrepreneur entrepreneur= entrepreneurRepository.findById(id).get();
        return entrepreneur;
    }

    @Override
    public void deleteEntrepreneurById(Long id) {
        entrepreneurRepository.deleteById(id);

    }
}
