package com.example.demo.registration;

import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "api/v1/registration")
@AllArgsConstructor
@CrossOrigin("*")
public class RegistrationController {

    private final RegistrationService registrationService;

    @PostMapping
    public ResponseEntity<Boolean> register(@RequestBody RegistrationRequest request) {
        return registrationService.register(request);
    }

    @PostMapping(path = "{userToken}")
    public String confirm(@PathVariable("userToken")  String token) {
        return registrationService.confirmToken(token);
    }

}
