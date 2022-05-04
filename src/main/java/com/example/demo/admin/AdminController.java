package com.example.demo.admin;

import com.example.demo.appuser.AppUser;
import com.example.demo.appuser.AppUserRepository;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.mail.MessagingException;
import java.io.UnsupportedEncodingException;

@RestController
@RequestMapping(path = "/coach")
@AllArgsConstructor
@CrossOrigin("*")
public class AdminController {
    private final AdminService adminService;
    private final AppUserRepository appUserRepository;
    @PostMapping(path = "/create")
    public String addCoach(@RequestBody AdminRequest request) {
       return adminService.addCoach(request);
    }

    @GetMapping(path="changePass")
    public String changePassword(@RequestParam( required=false,name = "token") String token){
        return  adminService.confirmCoach(token);

    }

    @PostMapping(path = "changePass")
    public String addToken(AppUser appUser, @RequestParam String newPassword){
        System.out.println(newPassword);
//        System.out.println(coachToken);
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        String encodedPassword = passwordEncoder.encode(newPassword);
        appUser.setPassword(encodedPassword);
        appUserRepository.save(appUser);
 return "passwordChange";
    }
//    @PostMapping(path = "/changePass")
//    public String  addPaas( String tokenCoach) {
//        return adminService.changePass(tokenCoach);
//    }
}