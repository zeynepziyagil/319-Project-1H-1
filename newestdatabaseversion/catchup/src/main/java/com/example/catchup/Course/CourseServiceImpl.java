package com.example.catchup.Course;

import com.example.catchup.Course.Course;
import com.example.catchup.Course.CourseRepository;
import com.example.catchup.Course.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;

import java.util.List;
import java.util.Optional;
public class CourseServiceImpl implements CourseService {
    private CourseRepository courseRepository;
    @Autowired
    public void setCourseRepository(CourseRepository courseRepository) {
        this.courseRepository = courseRepository;
    }

    @Override
    public List<Course> findAll(){
        return courseRepository.findAll();
    }

    @Override
    public Optional<Course> findById(Long code){
        return courseRepository.findById(code);
    }

    @Override
    public void save(Course course){
        courseRepository.save(course);
    }

    @Override
    public void updateCourse(String name, List<Long> announcements, List<Long> ads, List<Long> assignments, List<Long> courseDocuments, List<Long> polls, List<Long> groups, Long code) {
        courseRepository.updateCourse(name,announcements, ads, assignments, courseDocuments, polls, groups, code);
    }

    @Override
    public int getTotalCourseNum() {
        return courseRepository.getTotalCourseNum();
    }

    @Override
    @Secured(value = "ROLE_ADMIN")
    public void delete(Long code){
        courseRepository.deleteCourse(code);
    }

    @Override
    public List<Long> getAnnouncements() {
        return courseRepository.getAnnouncements();
    }

    @Override
    public List<Long> getAssignments() {
        return courseRepository.getAssignments();
    }

    @Override
    public List<Long> getAdvertisements() {
        return courseRepository.getAdvertisements();
    }

    @Override
    public List<Long> getCourseDocuments() {
        return courseRepository.getCourseDocuments();
    }

    @Override
    public List<Long> getPolls() {
        return courseRepository.getPolls();
    }

    @Override
    public List<Long> getGroups() {
        return courseRepository.getGroups();
    }
}
