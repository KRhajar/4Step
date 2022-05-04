package com.example.demo.email;

import com.example.demo.appuser.AppUser;

import javax.mail.MessagingException;
import java.io.UnsupportedEncodingException;

public interface EmailSender {
    void send(String to, String email);

}
