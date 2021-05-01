package com.example.catchup.User;

import java.util.List;
import java.util.Optional;

public interface UserService {
    List<User> findAll();

    Optional<User> findById(Long id);

    void save(User user);

    void delete(Long id);

    void updateUser(String name, String surname, String password, List<Long> courseList, List<Long> conversations, Long id);

    boolean checkExistEmail(String mail );
    List<Long> findUsersByUserName(String name);

    int getTotalUserNum();
}
