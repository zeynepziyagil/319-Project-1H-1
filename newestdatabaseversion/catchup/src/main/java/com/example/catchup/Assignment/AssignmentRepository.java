package com.example.catchup.Assignment;

import com.example.catchup.Course.Course;
import com.example.catchup.User.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;


import java.util.Date;
import java.util.List;
@Transactional
public interface AssignmentRepository extends JpaRepository<Assignment,Long> {
    @Modifying
    @Query("update Assignment a set a.deadline = :deadline, a.title = :title, a.description = :description, a.numberOfUploadedAssign = :numberOfUploadedAssign, a.courseDocumentInstr = :courseDocumentInstr, a.artifacts = :artifacts,a.requests = :requests where a.id = :id")
    void updateAssignment(@Param("deadline") String deadline, @Param("title") String title , @Param("description") String description, @Param("numberOfUploadedAssign") int numberOfUploadedAssign, @Param("courseDocumentInstr") List<Long> courseDocumentInstr, @Param("artifacts") List<Long> artifacts, @Param("requests") List<Long> requests,  @Param("id")  Long id);

    @Query("select count (id) from Assignment")
    int getTotalAssignmentNum();

    @Modifying
    @Query("delete from Assignment a where a.id = :id")
    void deleteAssignment(@Param("id") Long id);
}
