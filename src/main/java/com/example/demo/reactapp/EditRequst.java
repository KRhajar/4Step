package com.example.demo.reactapp;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@EqualsAndHashCode
@ToString
public class EditRequst {
    private final String firstName;
    private final String lastName;
    private final String password;
    private final Long id ;

}
