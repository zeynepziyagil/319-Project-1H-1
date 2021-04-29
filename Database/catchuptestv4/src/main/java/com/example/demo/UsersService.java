package com.example.demo;

import java.util.List;
import java.util.Optional;


public interface UsersService {

    List<Users> findAll();

    Optional<Users> findById(Long id);

    boolean existEmail(String email);

    Long totalUsers();

    void save(Users user);

    Users update(Users user);

    void delete(Long id);
}
