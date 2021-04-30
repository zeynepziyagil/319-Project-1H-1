package com.example.catchup;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

public class StudentServiceImpl implements StudentService{
    //properties
    private StudentRepository studentRepository;

    @Autowired
    public void setStudentRepository(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    @Override
    public List<Student> findAll(){
        return studentRepository.findAll();
    }

    @Override
    public Optional<Student> findById(Long studentId){
        return studentRepository.findById(studentId);
    }

    @Override
    public void save(Student student){
        studentRepository.save(student);
    }

    @Override
    public void updateStudent(String name, String surname,String password,List<Long> courseList, List<Long> conversations,int currentSemester, List<Long> groups, String department, double averagePeerGrade, List<Long> reviews, Long studentId) {
        studentRepository.updateStudent( name, surname,password, courseList, conversations, currentSemester, groups, department, averagePeerGrade, reviews, studentId);
    }

    @Override
    public int getTotalStudentNum() {
        return studentRepository.getTotalStudentNum();
    }


    //@Override
   // public List<Long> findStudentsByUserName(String name) {
    //    return studentRepository.findStudentsByUserName(name);
    //}

    @Override
    @Secured(value = "ROLE_ADMIN")
    public void delete(Long studentId){
        studentRepository.deleteStudent(studentId);
    }


}
