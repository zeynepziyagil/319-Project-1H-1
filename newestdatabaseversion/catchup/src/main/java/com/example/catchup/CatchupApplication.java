package com.example.catchup;

import com.example.catchup.Assignment.Assignment;
import com.example.catchup.Assignment.AssignmentRepository;
import com.example.catchup.Course.*;
import com.example.catchup.Group.Advertisement;
import com.example.catchup.Group.AdvertisementRepository;
import com.example.catchup.Group.ProjectGroup;
import com.example.catchup.Group.ProjectGroupRepository;
import com.example.catchup.User.Student;
import com.example.catchup.User.StudentRepository;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;


@SpringBootApplication
public class CatchupApplication {

    public static void main(String[] args) {
        SpringApplication.run(CatchupApplication.class, args);
    }

    @Bean
    ApplicationRunner applicationRunner(QuestionRepository Repository){
        return args -> {
           Repository.save(new Question("What is your name? ", new ArrayList<>(0),null));
        };
    }
}