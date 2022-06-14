package com.example.demo.admin;

import com.example.demo.appuser.AppUser;
import com.example.demo.appuser.AppUserRepository;
import com.example.demo.registration.token.ConfirmationToken;
import com.example.demo.registration.token.ConfirmationTokenRepository;
import com.form.projectform.entity.Entrepreneur;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.mail.MessagingException;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.UnsupportedEncodingException;

@RestController
@RequestMapping(path = "/coach")
@AllArgsConstructor
@CrossOrigin("*")
public class AdminController {
    private final AdminService adminService;
    private final AppUserRepository appUserRepository;
    private final ConfirmationTokenRepository confirmationTokenRepository;
    @PostMapping(path = "/create")
    public ResponseEntity<Boolean>  addCoach(@RequestBody AdminRequest request) {
       return adminService.addCoach(request);
    }

    @GetMapping(path="changePass")
    public void changePassword(@RequestParam( required=false,name = "token") String token, HttpServletResponse httpServletResponse) throws IOException {
        adminService.confirmCoach(token);
        httpServletResponse.sendRedirect("/confirmcoach?token=" + token);
    }

    @PostMapping(path = "changePass")
    public void addToken(@RequestParam(name = "token") String token, @RequestParam(name = "password") String newPassword, HttpServletResponse httpServletResponse) throws IOException {
        ConfirmationToken confirmationToken = this.confirmationTokenRepository.findByToken(token).get();
        AppUser appUser = confirmationToken.getAppUser();

        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        String encodedPassword = passwordEncoder.encode(newPassword);
        appUser.setPassword(encodedPassword);
        appUserRepository.save(appUser);
        httpServletResponse.sendRedirect("/login");
    }

    @PutMapping(path = "{coachId}")
    public ResponseEntity<Entrepreneur> affectation(@PathVariable("coachId") Long coachId,
                                                         @RequestBody Entrepreneur entrepreneurDetails)
    {
        Entrepreneur entrepreneur= adminService.affectation(coachId,entrepreneurDetails);

        return ResponseEntity.ok(entrepreneur);

    }
//    @PostMapping(path = "/changePass")
//    public String  addPaas( String tokenCoach) {
//        return adminService.changePass(tokenCoach);
//    }
}