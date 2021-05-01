package com.example.catchup.User;

import java.util.List;
import java.util.Optional;

public interface StudentService{
    List<Student> findAll();

    Optional<Student> findById(Long studentId);

    void save(Student student);

    void delete(Long studentId);

    void updateStudent( String name, String surname, String password, List<Long> courseList, List<Long> conversations, int currentSemester, List<Long> groups, String department, double averagePeerGrade, List<Long> reviews, Long studentId);

    //List<Long> findStudentsByUserName(String name);

    int getTotalStudentNum();

    void addGroupById(Long groupId, Long studentId);
}
