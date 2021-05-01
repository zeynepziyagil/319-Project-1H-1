package com.example.catchup.Group;
import com.example.catchup.Course.Course;
import com.example.catchup.User.Student;
import com.example.catchup.User.User;

import java.util.List;
import java.util.Optional;

public interface AdvertisementService {
    List<Advertisement> findAll();

    Optional<Advertisement> findById(Long id);

    void save(Advertisement ad);

    void delete(Long id);

    void updateAdvertisement(String title, String description,Long id );

    int getTotalAdvertisementNum();
}

