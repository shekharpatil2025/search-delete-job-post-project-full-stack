package com.shekhar.spring_boot_rest.controller;

import com.shekhar.spring_boot_rest.dto.LoginRequest;
import com.shekhar.spring_boot_rest.dto.LoginResponse;
import com.shekhar.spring_boot_rest.model.User;
import com.shekhar.spring_boot_rest.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public User register(@RequestBody User request) {
        return userService.saveuser(request);
    }

    @PostMapping("/login")
    public LoginResponse login(@RequestBody LoginRequest request) {
        return userService.verify(request.getUsername(), request.getPassword());
    }
}
