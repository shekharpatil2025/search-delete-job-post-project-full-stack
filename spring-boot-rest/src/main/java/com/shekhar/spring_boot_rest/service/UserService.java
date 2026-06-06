package com.shekhar.spring_boot_rest.service;

import com.shekhar.spring_boot_rest.dto.LoginResponse;
import com.shekhar.spring_boot_rest.model.User;
import com.shekhar.spring_boot_rest.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

@Service
public class UserService {
    @Autowired
    private UserRepo repo;

    @Autowired
    private JwtService jwtService;

    @Autowired
    private AuthenticationManager authManager;


    public LoginResponse verify(
            String username,
            String password
    ) {

        Authentication authentication =
                authManager.authenticate(

                        new UsernamePasswordAuthenticationToken(
                                username,
                                password
                        )
                );

        if(authentication.isAuthenticated()) {

            User user = repo.findByUsername(username);

            String token = jwtService.generateToken(username);

            String role =
                    user.getRole()
                            .replace("ROLE_", "");

            return new LoginResponse(
                    token,
                    role,
                    user.getUsername()
            );
        }

        return null;
    }

    private BCryptPasswordEncoder encoder = new BCryptPasswordEncoder(12);
    public User saveuser(User user) {
        user.setPassword(encoder.encode(user.getPassword()));
        System.out.println(user.getRole());
        return repo.save(user);
    }
}
