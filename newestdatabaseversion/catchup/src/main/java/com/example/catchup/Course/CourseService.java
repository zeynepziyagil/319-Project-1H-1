package com.example.catchup.Course;
import com.example.catchup.Course.Course;

import java.util.List;
import java.util.Optional;

public interface CourseService {
    List<Course> findAll();

    Optional<Course> findById(Long code);

    void save(Course course);

    void delete(Long code);

    void updateCourse(String name, List<Long> announcements, List<Long> ads, List<Long> assignments, List<Long> courseDocuments, List<Long> polls, List<Long> groups, Long code);

    List<Long> getAnnouncements();

    List<Long> getAssignments();

    List<Long> getAdvertisements();

    List<Long> getCourseDocuments();

    List<Long> getPolls();

    List<Long> getGroups();

    int getTotalCourseNum();
}
