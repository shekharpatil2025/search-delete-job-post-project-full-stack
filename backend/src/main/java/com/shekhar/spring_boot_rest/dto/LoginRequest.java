package com.shekhar.spring_boot_rest.dto;

import lombok.Data;

@Data
public class LoginRequest {

    private String username;

    private String password;
}