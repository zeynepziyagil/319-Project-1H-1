package com.example.catchup.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;

import java.util.List;
import java.util.Optional;

public class UserServiceImpl implements UserService {
    //properties
    private UserRepository userRepository;
    @Autowired
    public void setUserRepository(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public List<User> findAll(){
        return userRepository.findAll();
    }

    @Override
    public Optional<User> findById(Long id){
        return userRepository.findById(id);
    }

    @Override
    public void save(User user){
        userRepository.save(user);
    }

    @Override
    public void updateUser(String name, String surname, String password, List<Long> courseList, List<Long> conversations,Long id) {
        userRepository.updateUser(name,surname,password,courseList,conversations,id);
    }

    @Override
    public int getTotalUserNum() {
        return userRepository.getTotalUserNum();
    }


    @Override
    public boolean checkExistEmail(String mail) {
        return userRepository.checkExistEmail(mail);
    }

    @Override
    public List<Long> findUsersByUserName(String name) {
        return userRepository.findUsersByUserName(name);
    }

    @Override
    @Secured(value = "ROLE_ADMIN")
    public void delete(Long id){
        userRepository.deleteUser(id);
    }

}
