package com.example.catchup.Assignment;
import com.example.catchup.Course.Course;
import com.example.catchup.User.User;
import com.example.catchup.User.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;

import java.util.Date;
import java.util.List;
import java.util.Optional;
public class AssignmentServiceImpl implements AssignmentService{
    //properties
    private AssignmentRepository assignmentRepository;
    @Autowired
    public void setAssignmentRepository(AssignmentRepository assignmentRepository) {
        this.assignmentRepository = assignmentRepository;
    }

    @Override
    public List<Assignment> findAll(){
        return assignmentRepository.findAll();
    }

    @Override
    public Optional<Assignment> findById(Long id){
        return assignmentRepository.findById(id);
    }

    @Override
    public void save(Assignment assignment){
        assignmentRepository.save(assignment);
    }

    @Override
    public void updateAssignment(String deadline, String title, String description, int numberOfUploadedAssign, List<Long> courseDocumentInstr, List<Long> artifacts, List<Long> requests, Long id) {
        assignmentRepository.updateAssignment(deadline,title,description,numberOfUploadedAssign,courseDocumentInstr,artifacts,requests, id);
    }


    @Override
    public int getTotalAssignmentNum() {
        return assignmentRepository.getTotalAssignmentNum();
    }

    @Override
    @Secured(value = "ROLE_ADMIN")
    public void delete(Long id){
        assignmentRepository.deleteAssignment(id);
    }
}
