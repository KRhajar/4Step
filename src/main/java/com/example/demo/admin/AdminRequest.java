package com.example.demo.admin;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.ToString;

@Getter
@AllArgsConstructor
@EqualsAndHashCode
@ToString
public class AdminRequest {
    private final String firstName;
    private final String lastName;
    private final String email;
}
