package com.example.demo.appuser;

import com.example.demo.admin.AdminService;
import com.example.demo.email.EmailSender;
import com.example.demo.registration.token.ConfirmationToken;
import com.example.demo.registration.token.ConfirmationTokenService;
import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import java.io.UnsupportedEncodingException;
import java.sql.SQLOutput;
import java.time.LocalDateTime;
import java.util.Optional;
import java.util.UUID;

@Service
@AllArgsConstructor
public class AppUserService implements UserDetailsService {

    private final static String USER_NOT_FOUND_MSG =
            "user with email %s not found";

    private final AppUserRepository appUserRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;
    private final ConfirmationTokenService confirmationTokenService;
    private final EmailSender emailSender;
    @Override
    public UserDetails loadUserByUsername(String email)
            throws UsernameNotFoundException {
        return appUserRepository.findByEmail(email)
                .orElseThrow(() ->
                        new UsernameNotFoundException(
                                String.format(USER_NOT_FOUND_MSG, email)));
    }

    public String signUpUser(AppUser appUser) {
        boolean userExists = appUserRepository
                .findByEmail(appUser.getEmail())
                .isPresent();

        if (userExists) {
            // TODO check of attributes are the same and
            // TODO if email not confirmed send confirmation email.

            return "exists";
        }

        String encodedPassword = bCryptPasswordEncoder
                .encode(appUser.getPassword());

        appUser.setPassword(encodedPassword);

        appUserRepository.save(appUser);

        String token = UUID.randomUUID().toString();

        ConfirmationToken confirmationToken = new ConfirmationToken(
                token,
                LocalDateTime.now(),
                LocalDateTime.now().plusMinutes(15),
                appUser
        );

        confirmationTokenService.saveConfirmationToken(
                confirmationToken);

//        TODO: SEND EMAIL

        return token;
    }

    public int enableAppUser(String email) {


        return appUserRepository.enableAppUser(email);
    }

    public Boolean signInUser(AppUser appUser) {

        Optional<AppUser> userExists = appUserRepository.findByEmail(appUser.getEmail());
        if (userExists.isPresent()) {
            AppUser appUserx = userExists.get();
            String dbPassword = appUserx.getPassword();


            System.out.println(appUser.getPassword());

            if (bCryptPasswordEncoder.matches(appUser.getPassword(), dbPassword) && appUserx.getEnabled() == true) {

                return true;

            } else {

                return false;
            }
        } else {
            return false;
        }


    }

    public String addCoach(AppUser appUser)  {
        boolean coatchExists = appUserRepository.findByEmail(appUser.getEmail())
                    .isPresent();
        if (coatchExists) {
            throw new IllegalStateException("email already taken");
        }

//            String encodedPassword = bCryptPasswordEncoder
//                    .encode(appUser.getPassword());

//            appUser.setPassword(encodedPassword);
            appUserRepository.save(appUser);

        String token = UUID.randomUUID().toString();
//makay3erfhche
        ConfirmationToken confirmationToken = new ConfirmationToken(
                token,
                LocalDateTime.now(),
                LocalDateTime.now().plusMinutes(60),
                appUser
        );

        confirmationTokenService.saveConfirmationToken(
                confirmationToken);

//        TODO: SEND EMAIL

        return token;


    }
//
//    public String savePass(AppUser appUser) {
//        boolean coatchExists = appUserRepository.findByEmail(appUser.getEmail())
//                .isPresent();
//        if (coatchExists) {
//            throw new IllegalStateException("email already taken");
//        }
//
//           String encodedPassword = bCryptPasswordEncoder
//                   .encode(appUser.getPassword());
//         appUser.setPassword(encodedPassword);
//        appUserRepository.save(appUser);
//
//        return "new pass adding";
//    }

//    public String addPass(AppUser appUser) {
//        boolean coatchExists = appUserRepository.findByEmail(appUser.getEmail())
//                .isPresent();
//        if (coatchExists) {
//            throw new IllegalStateException("email already taken");
//        }
//
//        String encodedPassword = bCryptPasswordEncoder
//                .encode(appUser.getPassword());
//
//        appUser.setPassword(encodedPassword);
//        appUserRepository.save(appUser);
//        return "pass";
//    }
//
//    public String savePass() {
//        return "hello";
//    }
}
