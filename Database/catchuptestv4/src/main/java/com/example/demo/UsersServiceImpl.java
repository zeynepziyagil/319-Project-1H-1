package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UsersServiceImpl implements UsersService{

    //properties
    private Users_Repository users_repository;

    @Autowired
    public void setUsers_repository(Users_Repository users_repository) {
        this.users_repository = users_repository;
    }


    public List<Users> findAll(){
        return users_repository.findAll();
    }


    public Optional<Users> findById(Long id){
        return users_repository.findById(id);
    }

    public boolean existEmail(String email){

        return users_repository.exists();
    }

    public Long totalUsers(){
        long a = 1;
        return a;
    }

    public void save(Users user){

    }

    public Users update(Users user){

    }

    public void delete(Long id){

    }

}
