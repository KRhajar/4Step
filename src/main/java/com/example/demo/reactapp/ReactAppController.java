package com.example.demo.reactapp;


import com.example.demo.appuser.AppUser;
import com.example.demo.appuser.AppUserRepository;
import com.example.demo.appuser.AppUserRole;
import com.example.demo.registration.token.ConfirmationToken;
import com.example.demo.registration.token.ConfirmationTokenRepository;
import lombok.AllArgsConstructor;
import org.jetbrains.annotations.NotNull;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Optional;

@Controller @AllArgsConstructor
@CrossOrigin(origins = "*" )
public class ReactAppController {

    private final AppUserRepository appUserRepository;
    private final ConfirmationTokenRepository confirmationTokenRepository;


    @GetMapping(value = {"/", "/form", "/confirmcoach", "/editprofile", "/profile"})
    public String getHome() {
        return "index.html";
    }

    @GetMapping(value = {"/login", "/register"})
    public String getAuthForms() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication.getPrincipal() instanceof AppUser) {
            return "redirect:/";
        } else {

            return "index.html";

        }
    }


    @GetMapping("/current-user")
    public ResponseEntity<AppUser> getCurrentUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        Object loggedUser = authentication.getPrincipal();
        if (loggedUser instanceof AppUser) {
            return ResponseEntity.ok().body((AppUser) loggedUser);
        } else {
            AppUser appUser = this.appUserRepository.findByEmail("hajar@gmail.com").get();
            return ResponseEntity.ok().body(appUser);
            //     return ResponseEntity.status(403).build();
        }
    }




}