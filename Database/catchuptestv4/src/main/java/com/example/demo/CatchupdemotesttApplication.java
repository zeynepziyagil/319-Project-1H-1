package com.example.demo;

import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;


@SpringBootApplication
public class CatchupdemotesttApplication {

    public static void main(String[] args) {
        SpringApplication.run(CatchupdemotesttApplication.class, args);
    }

    @Bean
    ApplicationRunner applicationRunner(Users_Repository users_Repository){
        return args -> {
            users_Repository.save(new Users("Ada", "Arıkanoglu", "adarikanoglu@gmail.com", "test12345", "student"));
            users_Repository.save(new Users("Bilgehan", "Akcan", "bilgehanakcan@gmail.com,", "test123456", "student"));
        };
    }
}
