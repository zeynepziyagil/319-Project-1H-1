package com.example.catchup;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
@Transactional
public interface TeachingAssistantRepository extends JpaRepository<TeachingAssistant,Long>{
    @Modifying
    @Query("update TeachingAssistant t set t.name = :name, t.surname = :surname,t.password = :password, t.courseList = :courseList, t.conversations = :conversations, t.officeLocation = :officeLocation where t.id = :id")
    void updateTA( @Param("name") String name, @Param("surname") String surname ,@Param("password") String password, @Param("courseList") List<Long> courseList, @Param("conversations") List<Long> conversations, @Param("officeLocation") String officeLocation, @Param("id")  long id);

    //MAILDEN IDSINI ÇEK

    @Query("select count (id) from TeachingAssistant")
    int getTotalTANum();

    // @Query(value = "select s.studentId from Student s where s.name = : name")
    // List<Long> findStudentsByUserName(@Param("name") String name);

    @Modifying
    @Query("delete from TeachingAssistant t where t.id = :id")
    void deleteTA(@Param("id") Long id);
}
