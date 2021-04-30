package com.example.catchup;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
@Transactional
public interface StudentRepository extends JpaRepository<Student,Long>{
    @Modifying
    @Query("update Student s set s.name = :name, s.surname = :surname,s.password = :password, s.courseList = :courseList, s.conversations = :conversations,s.currentSemester = :currentSemester, s.groups = :groups, s.department = :department, s.averagePeerGrade = :averagePeerGrade, s.reviews = :reviews where s.studentId = :studentId")
    void updateStudent( @Param("name") String name, @Param("surname") String surname ,@Param("password") String password, @Param("courseList") List<Long> courseList, @Param("conversations") List<Long> conversations, @Param("currentSemester") int currentSemester, @Param("groups") List<Long> groups, @Param("department") String department, @Param("averagePeerGrade") double averagePeerGrade, @Param("reviews") List<Long> reviews, @Param("studentId")  long studentId);

    @Query("select count (studentId) from Student")
    int getTotalStudentNum();

   // @Query(value = "select s.studentId from Student s where s.name = : name")
   // List<Long> findStudentsByUserName(@Param("name") String name);

    @Modifying
    @Query("delete from Student s where s.studentId = :studentId")
    void deleteStudent(@Param("studentId") Long studentId);
}