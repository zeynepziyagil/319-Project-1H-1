package com.example.catchup.User;

import java.util.List;
import java.util.Optional;

public interface TeachingAssistantService {
    List<TeachingAssistant> findAll();

    Optional<TeachingAssistant> findById(Long id);

    void save(TeachingAssistant teachingAssistant);

    void deleteTA(Long id);

    //void updateTA( String name, String surname, String password, List<Long> courseList, List<Long> conversations, String officeLocation, Long TAId);

    //List<Long> findStudentsByUserName(String name);

    int getTotalTANum();
}
