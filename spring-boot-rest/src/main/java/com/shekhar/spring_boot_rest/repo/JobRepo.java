package com.shekhar.spring_boot_rest.repo;

import com.shekhar.spring_boot_rest.model.JobPost;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface JobRepo extends JpaRepository<JobPost,Integer> {

     List<JobPost> findByPostProfileContainingOrPostDescContaining(String PostProfile, String PostDesc);
}
