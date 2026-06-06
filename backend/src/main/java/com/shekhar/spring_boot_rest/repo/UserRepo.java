package com.shekhar.spring_boot_rest.repo;

import com.shekhar.spring_boot_rest.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.RestController;


public interface UserRepo extends JpaRepository<User, Long> {
    User findByUsername(String username);
}
