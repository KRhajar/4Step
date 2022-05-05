package com.example.demo.registration;

import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

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

   @GetMapping(path = "{userToken}")
   // @PostMapping("confirm")
    public String  confirm(@PathVariable("userToken")  String token, HttpServletResponse httpServletResponse
    ) throws IOException {
       httpServletResponse.sendRedirect("/login");
        return registrationService.confirmToken(token);

    }

}
