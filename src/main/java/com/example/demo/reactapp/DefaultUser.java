package com.example.demo.reactapp;

import com.example.demo.appuser.AppUser;
import com.example.demo.appuser.AppUserRepository;
import com.example.demo.appuser.AppUserRole;
import lombok.AllArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component @AllArgsConstructor
public class DefaultUser implements CommandLineRunner {
    private final AppUserRepository appUserRepository;

    @Override
    public void run(String... args) throws Exception {
        AppUser appUser = new AppUser("Hajar", "El Karroumi", "hajar@gmail.com", "hajar123", AppUserRole.USER);
        appUser.setId(1L);
        appUser.setEnabled(true);
        try{
            appUserRepository.save(appUser);
        }catch (Exception ignored){}

    }
}
