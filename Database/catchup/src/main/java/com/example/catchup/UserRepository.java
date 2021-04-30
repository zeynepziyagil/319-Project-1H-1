package com.example.catchup;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.NoRepositoryBean;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
@Transactional
public interface UserRepository  extends JpaRepository<User,Long>  {

    @Modifying
    @Query("update User u set u.name = :name, u.surname = :surname, u.password = :password, u.courseList = :courseList, u.conversations = :conversations where u.id = :id")
    void updateUser(@Param("name") String name, @Param("surname") String surname , @Param("password") String password, @Param("courseList") List<Long> courseList, @Param("conversations") List<Long> conversations, @Param("id")  long id);

    @Query("select count (id) from User")
    int getTotalUserNum();

    @Query(value = "select exists ( select u.mail  from User u where u.mail = : mail  )", nativeQuery = true)
    boolean checkExistEmail(@Param("mail") String mail );

    @Query(value = "select u.id from User u where u.name = : name")
    List<Long> findUsersByUserName(@Param("name") String name);

    @Modifying
    @Query("delete from User u where u.id = :id")
    void deleteUser(@Param("id") Long id);
}

