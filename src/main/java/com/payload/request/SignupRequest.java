package com.payload.request;

import lombok.Data;

import java.util.Set;

@Data
public class SignupRequest {
    private String firstname;
    private String lastname;
    private String username;
    private String email;
    private Set<String> role;
    private String password;

}
