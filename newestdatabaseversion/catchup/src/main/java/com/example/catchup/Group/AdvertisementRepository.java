package com.example.catchup.Group;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
@Transactional
public interface AdvertisementRepository extends JpaRepository<Advertisement,Long>{

    @Modifying
    @Query("update Advertisement a set a.title = :title, a.description = :description  where a.id = :id")
    void updateAdvertisement(@Param("title") String title, @Param("description") String description , @Param("id")  long id);

    @Query("select count (id) from Advertisement")
    int getTotalAdvertisementNum();

    @Modifying
    @Query("delete from Advertisement a where a.id = :id")
    void deleteAdvertisement(@Param("id") Long id);


}
