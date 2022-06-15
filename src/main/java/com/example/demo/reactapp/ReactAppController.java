package com.example.demo.reactapp;


import com.example.demo.appuser.AppUser;
import com.example.demo.appuser.AppUserRepository;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

@Controller @AllArgsConstructor
@CrossOrigin(origins = "*" )
public class ReactAppController {

    private final AppUserRepository appUserRepository;

    @GetMapping(value = {"/","propos","/all","/project/**", "/formulaire", "/confirmcoach"})
    public String getHome(){
        return "index.html";
    }

    @GetMapping(value = {"/login", "/register"})
    public String getAuthForms(){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication.getPrincipal() instanceof AppUser){
            return "redirect:/";
        }else {
            
            return "index.html";

        }
    }


    @GetMapping("/current-user")
    public ResponseEntity<AppUser> getCurrentUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        Object loggedUser =  authentication.getPrincipal();
        if (loggedUser instanceof AppUser){
            return ResponseEntity.ok().body((AppUser) loggedUser);
        }else {
          //AppUser appUser = this.appUserRepository.findByEmail("hajar@gmail.com").get();
         // return ResponseEntity.ok().body(appUser);
            return ResponseEntity.status(403).build();
        }
    }
}
