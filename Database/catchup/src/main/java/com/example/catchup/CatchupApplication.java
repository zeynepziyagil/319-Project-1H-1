package com.example.catchup;

import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;


@SpringBootApplication
public class CatchupApplication {

    public static void main(String[] args) {
        SpringApplication.run(CatchupApplication.class, args);
    }

    @Bean
    ApplicationRunner applicationRunner(TeachingAssistantRepository TARepository){
        return args -> {
           TARepository.deleteTA(1L);

        };
    }
}