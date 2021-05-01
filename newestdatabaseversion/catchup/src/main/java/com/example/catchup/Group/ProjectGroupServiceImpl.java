package com.example.catchup.Group;

import com.example.catchup.User.User;
import com.example.catchup.User.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;

import java.util.List;
import java.util.Optional;

public class ProjectGroupServiceImpl implements ProjectGroupService{
    //properties
    private ProjectGroupRepository projectGroupRepository;
    @Autowired
    public void setProjectGroupRepository(ProjectGroupRepository projectGroupRepository) {
        this.projectGroupRepository = projectGroupRepository;
    }

    @Override
    public List<ProjectGroup> findAll(){
        return projectGroupRepository.findAll();
    }

    @Override
    public Optional<ProjectGroup> findById(Long id){
        return projectGroupRepository.findById(id);
    }

    @Override
    public void save(ProjectGroup projectGroup){
        projectGroupRepository.save(projectGroup);
    }

    @Override
    public void updateProjectGroupStudent(String name, List<Long> team, Long id) {
        projectGroupRepository.updateProjectGroupStudent(name,team,id);
    }

    @Override
    public void updateProjectGroupTA(String name, int maxMemNum, Long id) {
        projectGroupRepository.updateProjectGroupTA(name,maxMemNum,id);
    }

    @Override
    public int getTotalProjectGroupNum() {
        return projectGroupRepository.getTotalProjectGroupNum();
    }

    @Override
    public List<Long> getAllStudents(Long id) {
        return projectGroupRepository.getAllStudents(id);
    }

    @Override
    @Secured(value = "ROLE_ADMIN")
    public void delete(Long id){
        projectGroupRepository.deleteProjectGroup(id);
    }
}
