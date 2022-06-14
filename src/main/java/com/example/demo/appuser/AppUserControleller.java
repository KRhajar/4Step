package com.example.demo.appuser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/appUser")
@CrossOrigin("*")
public class AppUserControleller {
    @Autowired
    AppUserService appUserService;
    @GetMapping("/coach")
    public List<AppUser> findAll(){

        return appUserService.findCoach();
    }
}
