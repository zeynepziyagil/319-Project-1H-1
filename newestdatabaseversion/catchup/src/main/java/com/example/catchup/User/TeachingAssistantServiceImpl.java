package com.example.catchup.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;

import java.util.List;
import java.util.Optional;

public class TeachingAssistantServiceImpl implements TeachingAssistantService {
    //properties
    private TeachingAssistantRepository teachingAssistantRepository;

    @Autowired
    public void setTeachingAssistantRepository(TeachingAssistantRepository teachingAssistantRepository) {
        this.teachingAssistantRepository = teachingAssistantRepository;
    }

    @Override
    public List<TeachingAssistant> findAll(){
        return teachingAssistantRepository.findAll();
    }

    @Override
    public Optional<TeachingAssistant> findById(Long id){
        return teachingAssistantRepository.findById(id);
    }

    @Override
    public void save(TeachingAssistant teachingAssistant){
        teachingAssistantRepository.save(teachingAssistant);
    }

    //@Override
   // public void updateTA(String name, String surname,String password,List<Long> courseList, List<Long> conversations, String officeLocation, Long TAId) {
   //     teachingAssistantRepository.updateTA( name, surname,password, courseList, conversations, officeLocation, TAId);
   // }

    @Override
    public int getTotalTANum() {
        return teachingAssistantRepository.getTotalTANum();
    }


    //@Override
    // public List<Long> findStudentsByUserName(String name) {
    //    return studentRepository.findStudentsByUserName(name);
    //}

    @Override
    @Secured(value = "ROLE_ADMIN")
    public void deleteTA(Long id){
        teachingAssistantRepository.deleteTA(id);
    }


}
