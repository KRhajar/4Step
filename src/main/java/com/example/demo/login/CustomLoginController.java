package com.example.demo.login;

import com.example.demo.appuser.AppUser;
import com.example.demo.appuser.AppUserService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "/api/login")
@AllArgsConstructor
@CrossOrigin("*")
public class CustomLoginController {
    private final AppUserService appUserService;
//    @PostMapping
//    public String login(@RequestBody LoginRequest request) {
//        return loginService.login(request);
//    }


    @PostMapping(path = "validate")
    public  ResponseEntity<Boolean> validation(@RequestBody AppUser appUser){
       boolean validate= appUserService.signInUser(appUser);
      if(validate==true){
          Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
          System.out.println(authentication.getPrincipal());
          return ResponseEntity.ok(true);
      }
      else{
          return ResponseEntity.ok(false);
      }

    }

}
