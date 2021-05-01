package com.example.catchup.Assignment;

import com.example.catchup.Course.Course;
import com.example.catchup.User.User;

import java.util.Date;
import java.util.List;
import java.util.Optional;

public interface AssignmentService {
    List<Assignment> findAll();

    Optional<Assignment> findById(Long id);

    void save(Assignment assignment);

    void delete(Long id);

    void updateAssignment(String deadline, String title, String description, int numberOfUploadedAssign, List<Long> courseDocumentInstr, List<Long> artifacts, List<Long> requests, Long id);

    int getTotalAssignmentNum();
}
