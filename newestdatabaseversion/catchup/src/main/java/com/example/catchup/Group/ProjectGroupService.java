package com.example.catchup.Group;
import com.example.catchup.User.User;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

public interface ProjectGroupService {
    List<ProjectGroup> findAll();

    Optional<ProjectGroup> findById(Long id);

    void save(ProjectGroup projectGroup);

    void delete(Long id);

    void updateProjectGroupStudent(String name, List<Long> team,Long id);

    void updateProjectGroupTA(String name, int maxMemNum, Long id);

    int getTotalProjectGroupNum();

    List<Long>  getAllStudents(Long id);

}
