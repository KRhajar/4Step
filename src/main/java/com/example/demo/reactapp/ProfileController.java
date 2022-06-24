package com.example.demo.reactapp;

import com.example.demo.appuser.AppUser;
import com.example.demo.appuser.AppUserRepository;
import org.jetbrains.annotations.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import com.example.demo.reactapp.ResourceNotFoundExeption;


import java.util.Optional;

@RestController
@RequestMapping("/edit-user")

public class ProfileController {
    @Autowired
    AppUserRepository appUserRepository;
    @GetMapping("{id}")
    Optional<AppUser> getEmployeeById(@PathVariable Long id){

        Optional<AppUser> user=   appUserRepository.findById( id);


        return user;
    }
    @PutMapping("{id}")
    public ResponseEntity<AppUser> editProfile(@PathVariable Long id, @RequestBody  EditRequst editRequst) {
//        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
//     Object loggedUser =  authentication.getPrincipal();
//        System.out.println(loggedUser);


        AppUser userUpdate=appUserRepository.findById(id).orElseThrow(()->new ResourceNotFoundExeption("employee with this id deos not exist"+id));
userUpdate.setFirstName(editRequst.getFirstName());
userUpdate.setLastName(editRequst.getLastName());
userUpdate.setPassword(userUpdate.getPassword());
userUpdate.setAppUserRole(userUpdate.getAppUserRole());
userUpdate.setId(userUpdate.getId());
userUpdate.setEmail(userUpdate.getEmail());





appUserRepository.save(userUpdate);
        return ResponseEntity.ok(userUpdate);

//        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
//        Long identifer=editRequst.getId();
//
//        if (principal instanceof AppUser) {
//            //Long username = ((AppUser) principal).getId();
//
//            Optional<AppUser> user = appUserRepository.findById(identifer);
//            if (user.isPresent()) {
//                AppUser u = user.get();
//                u.setFirstName(editRequst.getFirstName());
//                u.setLastName(editRequst.getLastName());
//                u.setPassword(editRequst.getPassword());
//                appUserRepository.save(u);
//                System.out.println("yay");
//
//
//            }
//
//        } else {
//            String username = principal.toString();
//            Optional<AppUser> user = appUserRepository.findByEmail(username);
//            if (user.isPresent()) {
//                AppUser u = user.get();
//                u.setFirstName(editRequst.getFirstName());
//                u.setLastName(editRequst.getLastName());
//                u.setPassword(editRequst.getPassword());
//                appUserRepository.save(u);
//
//            }
//            // ConfirmationToken confirmationToken = this.confirmationTokenRepository.findByToken(token).get();
//
//
//        }


    }



}
