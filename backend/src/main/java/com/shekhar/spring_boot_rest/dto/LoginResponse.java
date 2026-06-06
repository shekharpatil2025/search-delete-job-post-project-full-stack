package com.shekhar.spring_boot_rest.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class LoginResponse {

    private String token;
    private String role;        // ← add
    private String username;    // ← add
}