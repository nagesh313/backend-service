package com.payload.request;

import lombok.Data;


@Data
public class LoginRequest {
    private String username;
    private String firstname;
    private String lastname;
    private String email;
    private String password;
}
