package com.shekhar.spring_boot_rest.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.shekhar.spring_boot_rest.model.JobPost;
import com.shekhar.spring_boot_rest.repo.JobRepo;


@Service
public class JobService {

    @Autowired
    public JobRepo repo;


    //method to return all JobPosts
    public List<JobPost> getAllJobs() {
        return repo.findAll();


    }

    // method to add a jobPost
    public void addJob(JobPost jobPost) {
        repo.save(jobPost);

    }

    //method to get job by id
    public JobPost getJob(int postId) {

        return repo.findById(postId).orElse(new JobPost());
    }

    //method to update job with job post object
    public void updateJob(JobPost jobPost) {
        repo.save(jobPost);
    }

    //method to delete job post by id
    public void deleteJob(int postId) {
        repo.deleteById(postId);

    }


    public void load() {
        // arrayList to store store JobPost objects
        List<JobPost> jobs =
                new ArrayList<>(List.of(

                        new JobPost(1, "Software Engineer",
                                "Exciting opportunity for a skilled software engineer.",
                                3,
                                List.of("Java", "Spring", "SQL")),

                        new JobPost(2, "Data Scientist",
                                "Join our data science team and work on cutting-edge projects.",
                                5,
                                List.of("Python", "Machine Learning", "TensorFlow")),

                        new JobPost(3, "Frontend Developer",
                                "Create amazing user interfaces with our talented frontend team.",
                                2,
                                List.of("JavaScript", "React", "CSS")),

                        new JobPost(4, "Network Engineer",
                                "Design and maintain our robust network infrastructure.",
                                4,
                                List.of("Cisco", "Routing", "Firewalls")),

                        new JobPost(5, "UX Designer",
                                "Shape the user experience with your creative design skills.",
                                3,
                                List.of("UI/UX Design", "Adobe XD", "Prototyping")),

                        // Additional 15 Jobs

                        new JobPost(6, "Backend Developer",
                                "Build scalable backend APIs and microservices.",
                                4,
                                List.of("Java", "Spring Boot", "MySQL")),

                        new JobPost(7, "DevOps Engineer",
                                "Automate deployment pipelines and cloud infrastructure.",
                                5,
                                List.of("Docker", "Kubernetes", "AWS")),

                        new JobPost(8, "Android Developer",
                                "Develop modern Android applications for millions of users.",
                                2,
                                List.of("Kotlin", "Android", "Firebase")),

                        new JobPost(9, "Cloud Engineer",
                                "Manage and optimize cloud-based infrastructure solutions.",
                                4,
                                List.of("AWS", "Terraform", "Linux")),

                        new JobPost(10, "Cybersecurity Analyst",
                                "Monitor systems and secure enterprise infrastructure.",
                                3,
                                List.of("Cybersecurity", "SIEM", "Penetration Testing")),

                        new JobPost(11, "AI Engineer",
                                "Develop AI-driven solutions using modern frameworks.",
                                5,
                                List.of("Python", "PyTorch", "Deep Learning")),

                        new JobPost(12, "Full Stack Developer",
                                "Work across frontend and backend systems.",
                                3,
                                List.of("React", "Node.js", "MongoDB")),

                        new JobPost(13, "QA Engineer",
                                "Ensure product quality through testing and automation.",
                                2,
                                List.of("Selenium", "JUnit", "Automation Testing")),

                        new JobPost(14, "Database Administrator",
                                "Maintain and optimize large-scale database systems.",
                                4,
                                List.of("Oracle", "SQL Server", "Performance Tuning")),

                        new JobPost(15, "Product Manager",
                                "Lead product planning and execution strategies.",
                                5,
                                List.of("Agile", "Roadmaps", "Stakeholder Management")),

                        new JobPost(16, "System Administrator",
                                "Manage enterprise servers and IT infrastructure.",
                                3,
                                List.of("Linux", "Shell Scripting", "VMware")),

                        new JobPost(17, "Machine Learning Engineer",
                                "Deploy and optimize machine learning pipelines.",
                                4,
                                List.of("Scikit-learn", "Python", "MLOps")),

                        new JobPost(18, "Game Developer",
                                "Create immersive gaming experiences for players.",
                                2,
                                List.of("Unity", "C#", "Game Physics")),

                        new JobPost(19, "Blockchain Developer",
                                "Develop decentralized applications and smart contracts.",
                                4,
                                List.of("Solidity", "Ethereum", "Web3")),

                        new JobPost(20, "Technical Support Engineer",
                                "Provide technical assistance and troubleshooting support.",
                                1,
                                List.of("Troubleshooting", "Networking", "Customer Support"))

                ));

        repo.saveAll(jobs);

    }


    public List<JobPost> searchJob(String keyword) {
        return repo.findByPostProfileContainingOrPostDescContaining(keyword,keyword);
    }
}