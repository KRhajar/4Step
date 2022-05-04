package com.example.demo.email;

import com.example.demo.appuser.AppUser;
import lombok.AllArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.io.UnsupportedEncodingException;

@Service
@AllArgsConstructor
public class EmailService implements EmailSender{

    private final static Logger LOGGER = LoggerFactory
            .getLogger(EmailService.class);

    private final JavaMailSender mailSender;

    @Override
    @Async
    public void send(String to, String email) {
        try {
            MimeMessage mimeMessage = mailSender.createMimeMessage();
            MimeMessageHelper helper =
                    new MimeMessageHelper(mimeMessage, "utf-8");
            helper.setText(email, true);
            helper.setTo(to);
            helper.setSubject("Confirm your email");
            helper.setFrom("hello@amigoscode.com");
            mailSender.send(mimeMessage);
        } catch (MessagingException e) {
            LOGGER.error("failed to send email", e);
            throw new IllegalStateException("failed to send email");
        }
    }
    public void sendEmail(AppUser appUser) throws MessagingException, UnsupportedEncodingException {
        String subject = "project successfully registred";
        String sendername = "p2e team";
        String mailContent = "<p>monsieur/madame<br>" + appUser.getFirstName() + " " + appUser.getLastName() + ", hello coach<p>";
        mailContent += "<p>thank you  <br> p2e team</p>";
        mailContent += "<a > open le lien </a>";
        mailContent += "<p>  your  password is "+appUser.getPassword()+"</p>";
        MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message);
        helper.setFrom("kerroumihajar98@gmail.com", sendername);
        helper.setTo(appUser.getEmail());
        helper.setText(mailContent, true);
        mailSender.send(message);


    }
}
