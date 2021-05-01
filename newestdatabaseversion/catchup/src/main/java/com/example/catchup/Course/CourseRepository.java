package com.example.catchup.Course;
import com.example.catchup.Course.Course;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
@Transactional
public interface CourseRepository  extends JpaRepository<Course,Long>  {
    @Modifying
    @Query("update Course c set c.name = :name, c.announcements = :announcements, c.ads = :ads, c.assignments = :assignments, c.polls = :polls, c.courseDocuments = :courseDocuments,c.groups = :groups where c.code = :code")
    void updateCourse(@Param("name") String name, @Param("announcements") List<Long> announcements , @Param("ads") List<Long> ads, @Param("assignments") List<Long> assignments,@Param("polls") List<Long> polls,@Param("courseDocuments") List<Long> courseDocuments,@Param("groups") List<Long> groups,@Param("code")  Long code);

    @Query("select count (code) from Course")
    int getTotalCourseNum();

    @Modifying
    @Query("delete from Course c where c.code = :code")
    void deleteCourse(@Param("code") Long code);

    @Query("select announcements from Course")
    List<Long> getAnnouncements();

    @Query("select assignments from Course")
    List<Long> getAssignments();

    @Query("select ads from Course")
    List<Long> getAdvertisements();

    @Query("select courseDocuments from Course")
    List<Long> getCourseDocuments();

    @Query("select polls from Course")
    List<Long> getPolls();

    @Query("select groups from Course")
    List<Long> getGroups();
}
